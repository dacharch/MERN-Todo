const express = require('express') ;
const mongo = require('mongoose') ;
const cors = require('cors');
const TodoModel = require('./model/Todo');
const app = express() ;


mongo.connect('mongodb://127.0.0.1:27017/test') ;

app.use(cors()) ;
app.use(express.json()) ;

app.get('/',(req,res)=>{
    res.send("hey I am listening") ;
});

app.get('/get',(req,res)=>{
    TodoModel.find().then(result => res.json(result)).catch(
        err => res.json(err)
    )
}) ;


app.post('/add',(req,res)=>{
    const task = req.body.task ;
    TodoModel.create({
        task:task
    }).then( result => res.json(result)).catch(err => res.json(err)) ;
})
app.listen(5000,()=>{
    console.log("Server is listening");
})