import express from "express";
import pg from "pg";
const app=express();
const port =3000;
 
const db=new pg.Client({
    user:"postgres",
    database:"world_food",
    password:416918,
    host:"localhost",
    port:5432
});

db.connect();

let data=[];

db.query("SELECT * FROM foods",(err,res)=>{
    if(err){
        console.error("Error: ",err.stack);
    }
    else{
        data=res;
    }
    db.end();
});

