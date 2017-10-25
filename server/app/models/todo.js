var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

priorities = ['Low', 'Medium', 'High', 'Critical'];

var todoSchema= new Schema({
    userId: { type: Schema.Types.ObjectID, require: true },
   todo: { type: String,require: true},
   description: {type: String},
   dateCreated: { type: String,require: true, unique:true},
    datedue: { type: Date},
    completed: {type: Boolean, default: false},
    file: { 
        filename: {type: String},
            orginalName:{type:String}
    
});
module.exports = Mongoose.model('ToDo', TodoSchema);