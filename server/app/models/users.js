var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
//Bcrypt =require('brcrotjs');
var userSchema= new Schema({
    fname: { type: String,require: true },
    lname: { type: String,require: true},
    email: { type: String,require: true, unique:true},
    password: {type: string},
    dateRegistered: { type: Date,requiredefault: date.now},
    status: {type: Boolean, default: true}
    
});
module.exports = Mongoose.model('User', userSchema);

