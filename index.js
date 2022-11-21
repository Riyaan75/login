require("dotenv").config();
const express = require("express");
const MDB = require("./database/client");
const port = process.env["PORT"] || 3000;
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");


//app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
const userRouter = require("./Routes/login");

app.use("/users", userRouter);

app.get("/",function(req,res){
  res.render("index");
})

app.get("/login", function(req,res){
  res.render("login");
})

app.get("/register", function(req,res){
  res.render("register");
})

// app.get('/',(req,res)=>{
//   res.status(200).send({
//     "Message":"Server Up and Running for DITU-Help-Crunch"
//   })
// })
app.listen(port, async () => {
  await MDB.connect();
  console.log(`Server litening to port:${port}`);
});
