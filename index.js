const express = require('express');

const app = express();

app.get("/", (req, res)=>{
res.send({Hello: 'World'})
})

var PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("Server has strated at port 3000");
    
});