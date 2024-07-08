import ex from "express";
const app=ex();
const port=200;

app.get("/",(req,res)=>{
    res.send("<center><h1>Home Page</h1></center>");
});

app.get("/contact",(req,res)=>{
    res.send("7975416918");
});

app.get("/about",(req,res)=>{
    res.send("myself");
});

app.listen(port,()=>{
    console.log(`Server started in port ${port}`);
})