const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://nityamsalgotra900:qWcVQHstuvaKYl86@cluster0.1sx31vg.mongodb.net/")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("failed to connect");
})
const LogInSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    SecondName:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    },
    address1:{
        type:String,
        require:true
    },
    address2:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    zip:{
        type:String,
        require:true
    },
})
const collection=new mongoose.model("Collection2",LogInSchema);

module.exports=collection