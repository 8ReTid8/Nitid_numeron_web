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
// app.post("/saveBisection"),(req,res)=>{
//     database.query(`insert into bisection (fx,xl,xr) values ('${req.fx}','${req.xl}','${req.xr}')`,(err)=>{
//         console.log(err)
//     })
// }
app.post("/saveBisection", (req, res) => {
    const {Equation,XL,XR} = req.body
    database.query(`INSERT INTO bisection (fx, xl, xr) VALUES ('${Equation}', '${XL}', '${XR}')`, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error occurred while saving data.");
        } else {
            res.status(200).send("Data saved successfully.");
        }
    });
});

app.get("/grap_one_newton",(req,res)=>{
    database.query("select * from grap_one_newton",(err,result)=>{
        res.json(result)
    })
})
app.get("/secant",(req,res)=>{
    database.query("select * from secant",(err,result)=>{
        res.json(result)
    })
})

app.get("/matrix",(req,res)=>{
    database.query("select * from matrix",(err,result)=>{
        res.json(result)
    })
})

app.get("/composimp",(req,res)=>{
    database.query("select * from composimp",(err,result)=>{
        res.json(result)
    })
})
app.get("/ddoh",(req,res)=>{
    database.query("select * from ddoh",(err,result)=>{
        res.json(result)
    })
})

app.listen(1987,()=>{
    console.log("run gay")
})