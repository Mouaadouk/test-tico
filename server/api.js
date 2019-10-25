const express = require('express');
const StageDb = require('./Model/Produit')
const Router = express.Router();


Router.get("/produit", (req, res) =>
{
    StageDb.find({})
    .exec((err,data)=>
    {
        if(err){
            res.send("Error getting produit")
        }
        else{
            res.json(data)
        }
    })
})


Router.post("/new", (req, res, next) =>
{
    const newProduct  = new StageDb({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        rating: req.body.rating,
        warranty_years: req.body.warranty_years,
        available:req.body.available
    })

    newProduct.save().then(product => res.json(product)).catch(next)
})

Router.delete("/delete/:Userid", (req, res, next) =>
{
    StageDb.findByIdAndRemove({_id: req.params.Userid})
    .then(doc => {
res.send(doc)
    })
})

Router.put("/update/:Userid", (req, res)=>
{
    StageDb.findByIdAndUpdate({_id: req.params.Userid}, {$set: {name: req.body.newname,price: req.body.newprice}}, {new: true})
    .then(d => 
        {console.log("updated" + d)
            res.json(d)
    }
        )
    .catch(err => console.log("not updated" + err))
})



Router.get("/produit/:UserId",(req,res)=>{
     StageDb.find({_id:req.params.UserId})
     
     .then(Posts=> res.json(Posts))
     .catch(err=>console.log(err))
 
 })

module.exports  = Router