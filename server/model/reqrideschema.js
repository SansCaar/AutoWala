import mongoose from "mongoose";
const reqrideSchema = new mongoose.Schema({
  user_name:{
  type: String,
  required: true,
  },
  ride_from:{
  type: String,
  required: true,
  },
  ride_to:{
  type:String,
  required: true,   
  },
  user_id: {
  type: Number,
  required: true,
  },
  ride_toc: {
  type: String,
  required: true,
  },
  user_fromlatitude: {
  type: Number,
  required: true,
  },
  user_fromlongitude: {
    type: Number,
    required: true,
  },
  user_tolatitude: {
    type: Number,
    required: true,
  },
  user_tolongitude: {
    type: Number,
    required: true,
  },

  ride_noofseats: {
    type: Number,
    required: true,
  },
  ride_status:{
    type: String,
    required:true
  },
  ride_code:{
    type: Number,
    required:true
  },
  rider_id:{
    type:Number,
  }

});

const reqrideschema = mongoose.model("reqride", reqrideSchema);
export default reqrideschema;
