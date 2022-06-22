import userschema from '../model/userSchema.js'
export const getAllUser = (req,res) =>
{
res.send("Hello world!");
}
export const postUser = async (req,res)=>
{
try {
const user = new userschema(req.body);
const userdata = await user.save();
res.status(201).json(userdata);

}
catch(e)
{
	res.status(400).json(e)
}
}