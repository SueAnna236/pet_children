const mysql=require("mysql");
let pool=mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"pet",
  connectionLimit:10
})
console.log("连接池");
module.exports=pool;