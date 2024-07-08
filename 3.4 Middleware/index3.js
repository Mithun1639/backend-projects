import express from "express";

const app = express();
const port = 3000;




function method(req,res,next){
  console.log("RequestMethod: ",req.method);
  console.log("Request URL: ",req.url);
  next();
}

app.use(method);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
