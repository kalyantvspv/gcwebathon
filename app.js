var express = require('express');
const app = express();
var mysql = require('mysql');
const cors = require('cors');
var path = require('path');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));


const connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root123',
        database:'kalyan'
})

connection.connect((err)=>{
    if(err) console.log(err);
    else console.log("connected!");
})

app.get("/",(req,res)=>{
    res.sendFile(path.join());
})

app.listen(3000,(err)=>{
    if(err) console.log(err)
    else console.log('started!')
})
