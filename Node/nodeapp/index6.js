import express  from 'express';
const app = express();


app.listen(8080,()=>{
    console.log("Server started");
});

app.post("/",(req,res)=>{
    res.send("Post Request");
});

