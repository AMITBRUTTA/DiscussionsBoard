var express = require('express');
var app = express();


var messages=[{text:"Test message",owner:"John"},{text:"Test  2",owner:"Amit"}];

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    next();
})


app.get('/messages', (req,res)=>{
    res.json(messages);
})

app.listen(1234);