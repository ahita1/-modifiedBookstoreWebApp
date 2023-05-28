const { model , Schema } = require("mongoose")
const userSchema = new Schema({
    username: {
        type : String,
        required : true , 
        unique : true,
    },
    password: {
        type : String,
        required : true,
    },
    id : {
        type : String,
        required : true,
        unique : true
    },
    sn : {
        type : String,
        required : true,
        unique : true,
        },
    laptopModel : {
        type: String , 
        required : true
        },
    department :{
            type : String , 
            required : true,
        }
    // createsAt : "",
    // updatedAt : ""
} , {timestamps : true})


module.exports = model("User" , userSchema)