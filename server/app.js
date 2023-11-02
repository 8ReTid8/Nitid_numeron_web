import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { database } from "./database.js";
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extend:true}))
app.use(bodyParser.json())

app.get("/Bisection",(req,res)=>{
    database.query("select * from bisection",(err,result)=>{
        res.json(result)
    })
})
app.get("/grap_one_newton",(req,res)=>{
    database.query("select * from grap_one_newton",(err,result)=>{
        res.json(result)
    })
})

app.listen(1987,()=>{
    console.log("run gay")
})