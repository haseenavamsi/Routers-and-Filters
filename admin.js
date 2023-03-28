const express=require('express');

const Router=express.Router();

Router.get ('/admin/add-prodect',(req,res,next)=> {
    res.send('<form action="/admin/add- prodect" method="POST"><input type="text" name="title"><button type="Submit">Add Prodect</button></from>');
    
    });
    
    Router.post ('/admin/add-prodect',(req,res,next)=>{
      console.log(req.body);
      res.redirect('/');
    });

    module.exports=Router;