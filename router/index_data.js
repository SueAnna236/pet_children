var express=require("express");
var pool=require("../pool.js");
let router=express.Router();

router.get("/index_data",(rq,res)=>{
  var sql="SELECT * FROM pet_site_info";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.json(result);
  })
});
module.exports=router;