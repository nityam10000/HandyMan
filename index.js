const express = require('express');
const app = express();
const path = require('path');
const collection=require('./mongodb');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '/')));

// Define routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'login.html'));
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname,'signup.html'));
});


// Your other routes...
app.post("/signup",async(req,res)=>{
    const data={
        firstName:req.body.firstName,
        secondName:req.body.secondName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        address1:req.body.address1,
        address2:req.body.address2,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip
    }
await collection.insertMany([data])
res.sendFile(path.join(__dirname, 'login.html'));
})

app.post("/login",async(req,res)=>{
    try {
        const check=await collection.findOne({username:req.body.username})
        if(check.password===req.body.password){
            res.sendFile(path.join(__dirname, 'index.html'));

        }
        else{
            res.send("Wrong password")
        }
    } catch{
        res.send("Wrong details")
    }
    
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
