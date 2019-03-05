// var express = require('express');
// var router = express.Router();
// const db = require('../database');

// router.get('/getHome',(req,res)=>{
//     // res.json('items')
//     const gameQuery = `select * from items where picture is not null order by random() limit 4`
//     db.query(gameQuery).then((results)=>{
//         // console.log(results)
//         res.json(results)
//     }).catch((err)=>{if(err) throw err})
// })

// router.get('/:id', (req,res)=>{
//     // console.log(req.params)
//     const gid = req.params.id
//     const gameQuery = `select * from games where id = $1`
//     db.query(gameQuery,[gid]).then((gameData)=>{
//         // console.log(gameData)
//         res.json(gameData)
//     }).catch((err)=>{if(err) throw err})
// })
// router.post('/postItem',(req,res)=>{
//     console.log(req.body)
// })

// module.exports = router;

var express = require('express');
var fs = require('fs')
var router = express.Router();
const db = require('../database');
var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'public/images' })


router.get('/getHome',(req,res)=>{
    // res.json('items')
    const gameQuery = `select * from items where picture is not null order by random() limit 4`
    db.query(gameQuery).then((results)=>{
        // console.log(results)
        res.json(results)
    }).catch((err)=>{if(err) throw err})
})

router.get('/:id', (req,res)=>{
    // console.log(req.params)
    const gid = req.params.id
    const gameQuery = `select * from items where id = $1`
    db.query(gameQuery,[gid]).then((itemData)=>{
        // console.log(gameData)
        res.json(itemData)
    }).catch((err)=>{if(err) throw err})
})
// router.post('/postItem',upload.array("images",12),(req,res)=>{
// console.log("req.body is: ",req.body)
//     const tmpPath = req.file.path;
//     const targetPath = `public/images/${req.file.originalname}`;
//     fs.readFile(tmpPath,(err,fileContents)=>{
//         if(err)throw err;
//         fs.writeFile(targetPath,fileContents,(err2)=>{
//             if(err2)throw err2;
//             const insertQuery = `insert into items (name,description,price,picture) values ($1,$2,$3,$4);`;
//             db.query(insertQuery,[]).then((results)=>{
//                 console.log(results)
//                 fs.unlink(tmpPath);
//                 res.redirect('/?msg=fileUploaded');
//             }).catch((err)=>{if(er) throw err})
//         });
//     });
// })

router.post('/postItem',(req,res)=>{
    console.log("req.body is: ",req.body)
    res.json(req.images)
})

module.exports = router;