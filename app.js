//使用express构建web服务器
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//引入路由模块
const routerData=require("./router/index.router");
const routerLogin=require("./router/login");
const routerRegister=require("./router/register");
const routerProduct=require("./router/product");

var app = express();
var server = http.createServer(app);
server.listen(6066);

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("public"));
app.use(cors({
  origin:"http://127.0.0.1:5500"
}))
//console.log("OK");

//使用路由器来管理路由
app.use("/index_data",routerData);
app.use("/login",routerLogin);
app.use("/register",routerRegister);
app.use("/product",routerProduct);
