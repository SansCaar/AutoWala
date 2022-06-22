import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://projectx:autowalaprojectx@cluster0.1f41p.mongodb.net/?retryWrites=true&w=majority",{
	useNewUrlParser:true,
	useUnifiedTopology:true,
}).then(()=>{
	console.log("Database connection successfull!")
}).catch((e)=>
{
console.log(e)
})

