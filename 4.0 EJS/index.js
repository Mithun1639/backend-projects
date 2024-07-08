import express from "express";

const app=express();
const port=3000;

let type="a weekday";
let adv="it's time to work hard";

app.get("/",(req,res)=>{
    const today = new Date("may 03");
const day = today.getDay();



if(day===0 || day===6){
    type="the weekend";
    adv="it's time to have fun";
}

    res.render("index.ejs",{daytype:type,advice:adv});
})


app.listen(port,()=>{
    console.log("server has started on port 3000");
})

