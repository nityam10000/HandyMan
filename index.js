const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/furniture", function (req, res) {
    res.sendFile(__dirname + "/views/furniture.html");
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});

app.use(express.static('public'));






const mongoose = require('mongoose');
const uri = "mongodb+srv://nityamsalgotra900:qWcVQHstuvaKYl86@cluster0.1sx31vg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
