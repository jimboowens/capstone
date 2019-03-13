var express = require('express');
var fs = require('fs')
var router = express.Router();
const db = require('../database');
var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'public/images' })


router.get('/getHome',(req,res)=>{
    console.log(req.body)
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



router.post('/postItem',upload.array("files",12),(req,res)=>{
    console.log(req.body)
    // console.log(req.files)
    const desc = req.body.description;
    const name = req.body.name;
    const type = req.body.type
    const price = req.body.price;
    const promiseArray = req.files.map((file)=>{
        return new Promise((resolve,reject)=>{
            const tmpPath = file.path;
            const targetPath = `public/images/${file.originalname}`;
            fs.readFile(tmpPath,(err,fileContents)=>{
                if(err)throw err;
                fs.writeFile(targetPath,fileContents,(err2)=>{
                    if(err2)throw err2;
                    const insertQuery = `insert into items (name,description,price,picture,type) values ($1,$2,$3,$4,$5);`;
                    db.query(insertQuery,[name,desc,price,targetPath,type]).then(()=>{
                        resolve()
                        fs.unlink(tmpPath,(unlinkErr)=>{if(unlinkErr){throw unlinkErr}});
                    }).catch((err3)=>{if(err3) throw err3})
                });
            });
        });
    });
    Promise.all(promiseArray).then((doneData)=>{
        res.json({msg:"item posted"});
    }).catch((err)=>{if (err) throw err})
});

module.exports = router;