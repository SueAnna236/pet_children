const http=require("http");
const express=require("express");
const routerData=require("./router/index_data");
const routerLogin=require("./router/login");
const routerRegister=require("./router/register");
const routerProduct=require("./router/product");

let app=express();
let server=http.createServer(app);
server.listen(3000);
//console.log("OK");

app.use("/index_data",routerData);
app.use("/login",routerLogin);
app.use("/register",routerRegister);
app.use("/product",routerProduct);