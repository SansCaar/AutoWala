import reqrideschema from "../model/reqrideschema.js";
export const setRide = async (req, res) => {
  try {
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
    const _id = req.params.id;
    const rides = await reqrideschema.findById(_id);
    res.status(201).send(rides);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const getValidRides = async (req, res) => {
  try {
    const validrides = await reqrideschema.find({ ride_status: "AVAILABLE" });
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
    const updateRide = await reqrideschema.findByIdAndUpdate(_id, {
      ride_status: "BOOKED",
      rider_id: 123,
    });

    console.log(updateRide);
    updateRide.save();
    res.status(201).send(updateRide);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const driverCanceled = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    const updateRide = await reqrideschema.findByIdAndUpdate(_id, {
      ride_status: "DRIVER_CANCELED",
    });

    console.log(updateRide);
    updateRide.save();
    res.status(201).send(updateRide);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const userCompleted = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    const updateRide = await reqrideschema.findByIdAndUpdate(_id, {
      ride_status: "USER_COMPLETED",
    });

    console.log(updateRide);
    updateRide.save();
    res.status(201).send(updateRide);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const driverCompleted = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    const updateRide = await reqrideschema.findByIdAndUpdate(_id, {
      ride_status: "DRIVER_COMPLETED",
    });

    console.log(updateRide);
    updateRide.save();
    res.status(201).send(updateRide);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const userCanceled = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    const updateRide = await reqrideschema.findByIdAndUpdate(_id, {
      ride_status: "USER_CANCELED",
    });

    console.log(updateRide);
    updateRide.save();
    res.status(201).send(updateRide);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const setValidate = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateRide = await reqrideschema.findByIdAndUpdate(_id, {
      ride_validated: true,
    });

    console.log(updateRide);
    updateRide.save();
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
      accepted.ride_status == "BOOKED"
        ? res.status(201).send({status:true})
        : res.status(201).send({status:false});
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getRidesByUserId = async (req,res) =>{
  try {
    const _id = req.params.id;
    const SpecificUser = await reqrideschema.find({user_id:_id}).sort({_id:-1});
    if (!SpecificUser) {
      return res.status(404).send();
    } else {
      res.status(201).send(SpecificUser);
    }
    
  } catch (error) {
    res.status(400).send(error)
    
  }
}

