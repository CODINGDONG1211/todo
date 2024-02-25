const express=require("express");
const bodyparser=require("body-parser");
var items=[];

const app=express();
app.set("view engine",'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  var today=new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  var day=today.toLocaleDateString("en-US",options);


  res.render("list",({whatday:day,newlistitems:items}));
});


app.post("/",function(req,res){
  var input=req.body.todo;

  items.push(input);
  res.redirect("/");
});

app.listen(3000,function(req,res){
  console.log("server is running at port 3000");
});
