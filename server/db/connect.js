import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://projectx:autowalaprojectx@cluster0.1f41p.mongodb.net/?retryWrites=true&w=majority",{
	useNewUrlParser:true,
	useUnifiedTopology:true,
}).then(()=>{
<<<<<<< HEAD
	console.log("ok")
=======
	console.log("Database connection successfull!")
>>>>>>> aa7dd69e5b65ba47629d25133f2ad5ec847b2b39
}).catch((e)=>
{
console.log(e)
})

