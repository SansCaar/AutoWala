
import mongoose from 'mongoose';
const userScheme= new mongoose.Schema({

user_name:{
type:String,
required:true,
},
user_email:{
type:String,
required:true,
},
user_address:{
type:String,
required:true,
},
user_contact:{
type:Number,
required:true,
},
user_gfid:{
type:Number,
required:true,
},
user_doc:{
type:Date,
default:Date.now,
required:true,
},
user_toc:{
type:String,
required:true,
},
user_referal:{
type:String,
required:true,
},


	})

const userschema = mongoose.model("users",userSchema);
export default userschema;