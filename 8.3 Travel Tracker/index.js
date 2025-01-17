import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db=new pg.Client({
  user:"postgres",
  host:"localhost",
  password:"416918",
  port:5432,
  database:"World"
})
db.connect();
app.get("/", async (req, res) => {
  //Write your code here.
  const result= await db.query("SELECT country_codes FROM visited_countries");
  let countries=[];
  result.rows.forEach((country)=>{
    countries.push(country.country_code);
  });
  console.log(result.rows);
  res.render("index.js",{countries:countries,total:countries.length});
  db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
