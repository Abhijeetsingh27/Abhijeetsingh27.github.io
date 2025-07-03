import express from "express";
const app = express();

app.listen(8080, () => {
  console.log("Server started");
  console.log("http://localhost:8080");
});

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

// app.get("/product",(req,res)=>{
//     //res.send("Product Page");
//     res.status(200).json({id:1,name:"Laptop",price:1000});
// });

// app.get("/contact",(req,res)=>{
//     res.send("Contact Page");
// });

// app.get("/ab*cd",(req,res)=>{
//     res.send("hello");
// });


//localhost:8080/name
// app.get("/:name",(req,res)=>{
//     //res.send("Good Morning");
//     res.send(req.params.name);
// });

// app.get("/name",(req,res)=>{
//     res.send("Good Morning");
// });

//localhost:8080/john/21
// app.get("/:name/:age",(req,res)=>{
//     //res.send("Good Morning");
//     res.send(req.params.name+ req.params.age);
// });


//localhost:8080/name/john/age/21
// app.get("/name/:name/age/:age",(req,res)=>{
//     //res.send("Good Morning");
//     res.send(req.params.name+ req.params.age);
// });

// app.get("/", (req, res) => {
//   res.send(req.headers.authorization);
// });

// app.get("/",(req,res)=>{
//     res.send(req.query.name+req.query.age)

// });

app.get("/",(req,res)=>{
    res.send("Get Request");
});
app.post("/",(req,res)=>{
    res.send("Post Request");
});
app.delete("/",(req,res)=>{
    res.send("Delete Request");
});
app.patch("/",(req,res)=>{
    res.send("patch Request");
});