var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/Todo');
var {User}=require('./models/User');

var express= require('express');
var bodyParser=require('body-parser');

var app= express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
   var todo= new Todo({
       task: req.body.task,
       completed: req.body.completed,
       completedOn: req.body.completedOn
   });
   
todo.save().then((doc)=>{
    res.send(doc);
},(e)=>{
    res.send(e);
})
})

app.get('/todos', (req,res)=>{
    Todo.find().then((todos)=>{
        res.send({
            Todo
        }),(e)=>{
            res.send(e);
        }
    })
})
app.listen(3000,()=>{
    console.log('started on port 3000')
});