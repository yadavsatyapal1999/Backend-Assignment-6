const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here


router.get('/blog',(req,res)=>{
    res.json({ok:'blog'})
})
router.post('/create',(req,res)=>{
     const body = req.body;
     const post = new Blog({
        name:body.name,
        profession:body.profession
     })
     post.save().then((record)=>{
        res.send({
            message:"Post saved Sucessfully",
            data:record
        })
        console.log("data saved sucessfully")
     })
})


module.exports = router;