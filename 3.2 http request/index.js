import ex from "express";
const app=ex();
const port =3000;

app.get("/",(req,res)=>{
    // console.log(req.rawHeaders);
    // res.send("hello world!");
    res.sendFile("index.html")
}
);

app.listen(port,()=>{
    console.log(`sever is runner on port ${port}`);
})