const express = require("express");
const router = express.Router();
const pool = require("../pool");

//http://localhost:6066/index
router.get("/",(req,res)=>{
  var sql = " SELECT * FROM pet_product WHERE pid!=0 ORDER BY pid";
  pool.query(sql,[],(err,result)=>{
    if(err){
      throw err;
    }
    res.send(result);
    console.log(result);
  })
})

module.exports=router;
