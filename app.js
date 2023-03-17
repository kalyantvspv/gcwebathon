var express = require('express');
const app = express();
var mysql = require('mysql');
const cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser')

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


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

app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
})

app.post("/signup",(req,res)=>{
    namefinal = req.body.name;
    email = req.body.email;
    password = req.body.password;
    confirmpassword = req.body.confirmpassword;

    if(password == confirmpassword)
    {
        connection.query("insert into users values(?,?,?)",[namefinal,email,password],(err)=>{
            if(err) console.log(err);
        })
        res.send(`<p>Registration successful</p>`);
    }
    else
    {
        res.write("<p>passwords do no match</p>");
        res.send();
    }  
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/",(req,res)=>{
    email = req.body.email;
    password = req.body.password;
    var flag = 0;var dd = 0;
    connection.query("select * from users",(err,response)=>{
          for (var i in response)
          {
            if(response[i].email == email)
            {
                flag = 1;
                if(response[i].password==password)
                { dd=1;
                    console.log("yes");
                  break;
                }
            }
          }
    })
    if(flag==1 && dd==1) res.write("<p>login successfull</p>")
    
    res.send();
})

app.listen(3000,(err)=>{
    if(err) console.log(err)
    else console.log('started!')
})
