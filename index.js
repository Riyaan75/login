require("dotenv").config();
const express = require("express");
const MDB = require("./database/client");
const port = process.env["PORT"] || 3000;
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const userRouter = require("./Routes/login");

app.use("/users", userRouter);

app.get('/',(req,res)=>{
  res.status(200).send({
    "Message":"Server Up and Running for DITU-Help-Crunch"
  })
})
app.listen(port, async () => {
  await MDB.connect();
  console.log(`Server litening to port:${port}`);
});
