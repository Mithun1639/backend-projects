const fs=require("fs");
// fs.writeFile("./message.txt","hello ffthis is mithun",(err)=>{
//   if(err) throw err;
//   console.log("the file is saved");
// })


fs.readFile("message","utf8",(err,data)=>{
  if(err) throw err;
  console.log(data);
});