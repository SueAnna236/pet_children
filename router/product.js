var express=require("express");
var pool=require("../pool.js");
let router=express.Router();

router.get("/product",(req,res)=>{
  var sql="SELECT * FROM pet_new_product";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.json(result);
  })
});
module.exports=router;