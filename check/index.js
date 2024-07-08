import pg from "pg";
import express from "express";
const app=express();
const port=2000;

const db=new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"World",
    password:"416918",
    port:5432 
});
db.connect();
db.query("SELECT *FROM captitals",(err,res)=>{
    if(err){
        console.error("error executing query:",err.stack);
    }
    else{
        console.log(res.rows);
    }
});
db.end();

app.listen(port,()=>{
    console.log("sever running in port 2000");
})
