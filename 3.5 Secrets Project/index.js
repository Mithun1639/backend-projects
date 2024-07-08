//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 300;
const app=express();

app.use(bodyParser.urlencoded({ extended: true }));

var security=false;

function PasswordCheck(req,res,next){
    const passwod=req.body["password"];
    if(passwod==="123"){
        security=true;
    }
    next();
}

app.use(PasswordCheck);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check",(req,res)=>{
    if(security){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
})
app.listen(port,()=>{
    console.log("server has started at port 300");
})
