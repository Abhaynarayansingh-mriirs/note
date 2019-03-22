var mongoose= require('mongoose');
var User= mongoose.model('User',{
    mail: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    }
})
// var newUser= new User({
//     mail: 'abhay.806.98@gmail.com'
// })
// newUser.save().then((resu)=>{
//     console.log(resu);
// },(err)=>{
//     console.log('unable to fetch user');
// }
// );


module.exports ={User};