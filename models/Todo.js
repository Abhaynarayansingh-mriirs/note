var mongoose= require('mongoose');
var Todo = mongoose.model('Todo',{
    task: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    }
,
completed: {
    type: Boolean
},
completedOn:{
    type: Date
}});
// var newTodo= new Todo({
//     task: 'cook dinner',
//     completed: false,
//     completedon: 12/12/12
// })
// newTodo.save().then((res)=>{
//     console.log(res);
// },(e)=>{
// console.log('unable to save');
// });

module.exports={Todo};