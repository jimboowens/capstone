var express = require('express');
var router = express.Router();
const db = require('../database');
// const faker=require('faker')

router.post('/getCart',(req,res)=>{
    // let counter=0
    // while (counter<1000){
    // var randName = faker.commerce.productName()
    // var randPrice = faker.commerce.price()
    // var randImage = faker.image.image()
    // var randDescription=faker.commerce.productAdjective()
    // const itemType=[
    //     'shoes',
    //     'furniture',
    //     'bedding',
    //     'jacket',
    //     'bags',
    // ]
    // let randNum = Math.floor(Math.random()*7)
    // console.log(randName,randPrice,randDescription,itemType[randNum])
    // dbInsertQuery=`insert into items (name,description,price,picture,type) values ($1,$2,$3,$4,$5)`
    // db.query(dbInsertQuery,[randName,randDescription,randPrice,randImage,itemType[randNum]]).catch((err)=>{throw err})

    //     counter++;

    // }
    // res.json(req.body);
    const token = req.body.token
    const getUser = `select id from users where token = $1`
    db.query(getUser,[token]).then((results)=>{
        // console.log(results)
        if (results.length ===0){res.json({msg:'bad token'})}
        else {
            const uid = results[0].id
            const getCartTotals = `select * from cart inner join items on items.id = cart.gid where uid = $1`
            db.query(getCartTotals,[uid]).then((results)=>{
                console.log(results)
                // const picture=results[0].picture
                const totals = `select sum(price) as totalprice, count(price) as totalitems from cart inner join items on items.id = cart.gid where uid = $1`
                db.query(totals,[uid]).then((totalNumbers)=>{
                    const responseData = {
                        contents:results,
                        total:totalNumbers[0].totalprice,
                        items:totalNumbers[0].totalitems,
                        // picture,
                    }
                    res.json(responseData)
                }).catch((err)=>{if(err) throw err})
            }).catch((err)=>{if(err) throw err})
        }
    }).catch((err)=>{if (err) throw err})
})

router.post('/updateCart',(req, res)=>{
    // res.json("test");
    console.log(req.body.token)
    console.log(req.body.itemId)
    const token = req.body.token;
    const itemId = req.body.itemId
    const getUser = `SELECT id from users WHERE token = $1`
    db.query(getUser,[token]).then((results)=>{
        if(results.length === 0){res.json({msg: "bad token"})
        }else{
            const uid = results[0].id;
            const addToCartQuery = `INSERT INTO cart (uid,gid,date) VALUES ($1,$2,now())`
            db.query(addToCartQuery,[uid,itemId]).then(()=>{
                const getCartTotals = `SELECT * FROM cart WHERE uid = $1`
                db.query(getCartTotals,[uid]).then((results)=>{
                    res.json(results)
                }).catch((err)=>{if(err)throw err;})
            }).catch((err)=>{if(err)throw err;})
        }
    }).catch((err)=>{if(err)throw err;})
})

router.post('/updateCart/deleteItem',(req,res)=>{
    console.log(req.body)
    const uid=req.body.uid
    const gid=req.body.gid
    const removeItemQuery = `delete from cart where uid=$1 and gid=$2`
    db.query(removeItemQuery,[uid,gid]).then((results)=>{
        const msg="item deleted"
        const getCartTotals = `SELECT * FROM cart WHERE uid = $1`
                db.query(getCartTotals,[uid]).then(()=>{
                    const getCartTotals = `select * from cart inner join items on items.id = cart.gid where uid = $1`
                    db.query(getCartTotals,[uid]).then((results)=>{
                        const totals = `select sum(price) as totalprice, count(price) as totalitems from cart inner join items on items.id = cart.gid where uid = $1`
                        db.query(totals,[uid]).then((totalNumbers)=>{
                            res.json({
                                msg,
                                contents:results,
                                total:totalNumbers[0].totalprice,
                                items:totalNumbers[0].totalitems,
                            })     
                        }).catch((err4)=>{if(err4) throw err4})
                    }).catch((err3)=>{if(err3) throw err3})
                }).catch((err2)=>{if(err2)throw err2;})
    }).catch((err)=>{if (err) throw err})
})

router.post('/stripe',(req,res)=>{
    const msg=""
    const token = req.body.userToken
    const stripeToken = req.body.stripeToken
    const userQuery = `select * from users where token = $1`
    if (stripeToken !==undefined){
        db.query(userQuery,[token]).then((results)=>{
            console.log(results[0].id)
            const uid = results[0].id
            const getCartQuery = `select * from cart inner join items on items.id = cart.gid where uid = $1`
            db.query(getCartQuery,[uid]).then((results2)=>{
                // console.log(results2)
                var gids = results2.map((item)=>{
                    let arr = [];
                    arr.push(item.id);
                    return arr;
                })
                const insertQuery=`insert into purchased (uid,items) values ($1,$2)`
                db.query(insertQuery,[uid,gids]).catch((err3)=>{if(err3) throw err3})
                const deleteQuery = `delete from cart where uid = $1`
                db.query(deleteQuery,[uid]).catch((err4)=>{if(err4) throw err4})
                res.json({
                    msg:"paymentSuccess",
                })
            }).catch((err2)=>{if(err2) throw err2})
        }).catch((err)=>{if(err) throw err})
    }
})


module.exports = router;