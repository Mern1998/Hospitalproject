const mongoose =require("mongoose")
const Productschema =new mongoose.Schema({
    name:String,
    age:String,
    email:String,
    password:String,
    gender:String,

})
module.exports =mongoose.model("users",Productschema);
