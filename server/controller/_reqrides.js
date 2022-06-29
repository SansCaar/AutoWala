import reqrideschema from "../model/reqrideschema.js";
export const setRide = async (req, res) => {
    try {
      console.log(req.body)
      const user = new reqrideschema(req.body);
      const userdata = await user.save();
      res.status(201).json(userdata);
    } catch (e) {
      res.status(400).json(e);
    }
  };
  export const getAllRide = async (req, res) => {
    try {
      const rides = await reqrideschema.find();
      res.status(201).send(rides);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  export const getRideById = async (req, res) => {
    try {
      const _id =req.params.id;
      const rides = await reqrideschema.findById(_id);
      res.status(201).send(rides);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  export const getValidRides = async (req, res) => {
    try {
      const validrides = await reqrideschema.find({ride_status:'AVAILABLE'});
      if (!validrides) {
        return res.status(404).send();
      } else {
        res.status(201).send(validrides);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };
  export const setAccepted = async (req, res) => {
    try {
      const _id = req.params.id;
      console.log(_id)
      const updateRide = await reqrideschema.findByIdAndUpdate(_id,
         {
       ride_status: "BOOKED",
       rider_id:123,
      });

      console.log(updateRide)
      updateRide.save()
      res.status(201).send(updateRide);

    } catch (error) {
      res.status(400).send(error);
    }
  };


  export const driverCanceled = async (req, res) => {
    try {
      const _id = req.params.id;
      console.log(_id)
      const updateRide = await reqrideschema.findByIdAndUpdate(_id,
         {
       ride_status: "DRIVER_CANCELED",
      });

      console.log(updateRide)
      updateRide.save()
      res.status(201).send(updateRide);

    } catch (error) {
      res.status(400).send(error);
    }
  };
  export const userCanceled = async (req, res) => {
    try {
      const _id = req.params.id;
      console.log(_id)
      const updateRide = await reqrideschema.findByIdAndUpdate(_id,
         {
       ride_status: "USER_CANCELED",
      });

      console.log(updateRide)
      updateRide.save()
      res.status(201).send(updateRide);

    } catch (error) {
      res.status(400).send(error);
    }
  };





  export const checkAccepted = async (req, res) => {
    try {
      const _id = req.params.id;
      const accepted = await reqrideschema.findById(_id);
      if (!accepted) {
        return res.status(404).send();
      } else {
        res.status(201).send(accepted);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };
  