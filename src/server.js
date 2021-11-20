const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get("/",(req, res) => {
    res.status(200).send("hello world !");
})

app.get("/deep",(req, res) => {
    res.status(200).send("hello deep sir !");
})

app.listen(port,()=>{
    console.log("listening on port " + port);
})