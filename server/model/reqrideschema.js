import mongoose from "mongoose";
const reqrideSchema = new mongoose.Schema({

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
  ride_available:{
    type: Number,
    required:true


  },
  ride_booked :{
    type: Number,
    required:true


  },
   ride_ended:{
    type: Number,
    required:true

  },
  ride_code:{
    type: Number,
    required:true
  }


});

const reqrideschema = mongoose.model("Reqride", reqrideSchema);
export default reqrideschema;
