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