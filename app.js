//使用express构建web服务器
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./pool");

//引入路由模块
//const routerData=require("./router/index.router");
//const routerLogin=require("./router/login");
//const routerRegister=require("./router/register");
//const routerProduct=require("./router/product");

var app = express();
app.listen(3000);

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("public"));
app.use(cors({
  origin:[
    "http://127.0.0.1:3000",
    "http://localhost:3000",
    "http://127.0.0.1:5500",
    "http:localhost:5500",    
    "http:localhost:3001"
  ],
  credentials: true
}));
const session = require("express-session");
app.use(session({
  secret: "128位随机字符串",
  resave: true,
  saveUniitialized: true,
  cookie: {
    maxAge: 1000*60*60*24
  }
}));
console.log("OK");

// 一：查询所有宠物
//http://localhost:3000/index
app.get("/index",(req,res)=>{
  var sql = " SELECT * FROM pet_product WHERE pid!=0 ORDER BY pid";
  pool.query(sql,[],(err,result)=>{
  if(err){
    throw err;
  }
  res.send(result);
  console.log(result[0]);
  });
});
//使用路由器来管理路由
//app.use("/index.data",routerData);
//app.use("/login",routerLogin);
//app.use("/register",routerRegister);
//app.use("/product",routerProduct);
