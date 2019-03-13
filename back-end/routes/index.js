var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs')
const passport = require('passport')
var randToken = require('rand-token');
const db = require('../database')


router.get('/auth/github',passport.authenticate('github'));

router.get('/auth/github/callback',passport.authenticate('github'),(req,res)=>{
  const selectQuery = `SELECT * FROM users WHERE username = $1`;
  const pgPromise = db.query(selectQuery,[req.user.username]);
  // console.log(pgPromise);
  pgPromise.then((data)=>{
    if(data.length === 0){
      // console.log("Not Found")
      const insertQuery = `INSERT into users (username) VALUES ($1) returning id`;
      db.query(insertQuery,[req.user.username]).then((id)=>{
        const payload = {id, username: req.user.username}
        const token = jwt.sign(payload, config.jwtSecret, {expiresIn: "1d"});
        sendToken(res,token);
      }).catch((error)=>{
        res.json(error)
      })
    }else{
      console.log("Found")
      const payload = {id: data.id, username: data.username};
      const token = jwt.sign(payload, config.jwtSecret, {expiresIn: "1d"});
      console.log(token)
      sendToken(res, token);
    }
  }).catch((error)=>{
    res.json(error)
  })
})


function sendToken(res,token){
  res.send(
    `<script>
      window.opener.postMessage({
        payload: ${JSON.stringify(token)},
        status: 'success'
        },window.opener.location)
    </script>`
    )
}

router.post('/search', (req,res)=>{
  console.log(req.body.searchCriteria)
  const searchCriteria=req.body.searchCriteria;
  const searchQuery = `select * from items where name like \'%$1#%\'`
  db.query(searchQuery,[searchCriteria]).then((results)=>{
    console.log(results)
    if (results.length>0){
      res.json(results)
    }else{
      const searchQueryExt = `select * from items where type like \'%$1#%\'`
      db.query(searchQueryExt,[searchCriteria]).then((results2)=>{
        console.log(results2)
        if (results2.length>0){
          res.json(results2)
        }else{
          const searchItemsQuery=`select * from items order by random() limit 4`
          db.query(searchItemsQuery).then((results3)=>{
            res.json(results3)
          }).catch((err3)=>{throw err3})
          
        }
      }).catch((err2)=>{throw err2})
    }
  }).catch((err)=>{if(err) throw err})
})

router.post('/register',(req,res)=>{
  // console.log('b/e is working')
  console.log(req.body)
  const checkUsernameQuery = `SELECT * FROM users WHERE email = $1`
  db.query(checkUsernameQuery,[req.body.username]).then((results)=>{
    // console.log (req.body.username)
    if(results.length === 0){
      
      // console.log(results)
        const token = randToken.uid(50)// this is for login to keep logged in after page refresh
        const hash = bcrypt.hashSync(req.body.password)// use bcrypt.hashsync to make password something random
        const username = req.body.username
        const email = req.body.email
        const adminRequestStatus = req.body.adminRequestStatus
        let adminToken;
        adminRequestStatus===true? adminToken="requested":adminToken=null
        res.json({
          msg:"user added",
          token,
          username,
          adminToken,
        })
      // user does not exist, let's add them
      const insertUserQuery = `INSERT INTO users (email,username,password,token,admintoken) VALUES ($1,$2,$3,$4,$5)`
      db.query(insertUserQuery,[email,username,hash,token,adminToken]).then(()=>{
        console.log('added')
      })
    } else {
      // console.log('exists')
      res.json({msg:"user exists"})
    }
  }).catch((err)=> {if (err) err})
})

router.post('/login',(req,res)=>{
  // console.log(req.body)
  const email = req.body.email;
  const password = req.body.password;
  // get the row with this username
  const selectUserQuery = `select * from users where email = $1`
  db.query(selectUserQuery,[email]).then((results)=>{
    const uid =results[0].id
    if(results.length === 0){
      res.json({msg:'bad romance'})
    }else{
      const checkHash = bcrypt.compareSync(password,results[0].password)
      const username = results[0].username
      const adminToken = results[0].admintoken
      if (checkHash){
        const token = randToken.uid(50)
        const updateTokenQuery = `update users set token = $1 where email = $2`
        db.query(updateTokenQuery,[token, email]).catch((err)=>{if (err) throw err})
          res.json({
            msg:"user logged in",
            token,
            username,
            adminToken,
          })
      }else {
        res.json({
          msg:"bad password"
        })
      }
    }
  }).catch((err)=> {if(err)throw err})
})




module.exports = router;


// res.json({msg:"no results"})