import express from "express";
const app = express();

// middleware

const logger =(req,res,next)=>{
    req.message="Logger";
    next();

};

//app.use(logger);
app.get("/",logger,(req,res)=>{
    res.send(req.message);
});
app.get("/products",logger,(req,res)=>{
    res.send(req.message);
});

app.listen(8080,()=>{
    console.log("Server started");
});