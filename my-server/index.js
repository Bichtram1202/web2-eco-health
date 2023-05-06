const express = require("express");
const app = express();
const port = 3002;

const morgan = require("morgan");
app.use(morgan("combined"));

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb" }));
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.get("/", (_req, res) => {
  res.send("Hello Restful API");
});
app.listen(port, () => {
  console.log(`My Server listening on port ${port}`);
});
const { MongoClient, ObjectId } = require("mongodb");
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("EcohealData");

// connect to collection
customerCollection = database.collection("Customer");
biscottiCollection = database.collection("Biscotti");
ProductsCollection = database.collection("Products");
UsersCollection= database.collection("Users");

app.get("/biscottis", cors(), async (_req, res) => {
  const result = await biscottiCollection.find({}).toArray();
  res.send(result);
});

app.get("/customers", cors(), async (req, res) => {
  const result = await customerCollection.find({}).toArray();
  res.send(result);
});

app.get("/customer/:id", cors(), async (req, res) => {
  var o_id = new ObjectId(req.params["id"]);
  const result = await customerCollection.find({ _id: o_id }).toArray();
  res.send(result[0]);
});

app.post("/customer", cors(), async (req, res) => {
  await customerCollection.insertOne(req.body);
  res.send(req.body);
});

app.put("/customer", cors(), async (req, res) => {
  await customerCollection.updateOne(
    { _id: new ObjectId(req.body._id) },
    {
      $set: {
        CustomerName: req.body.CustomerName,
        CustomerId: req.body.CustomerId,
        Address: req.body.Address,
        NumberPhone: req.body.NumberPhone,
        Email: req.body.Email,
        Gender: req.body.Gender,
        Status: req.body.Status,
      },
    }
  );
  var o_id = new ObjectId(req.body._id);
  const result = await customerCollection.find({ _id: o_id }).toArray();
  res.send(result[0]);
});
app.get("/products", cors(), async (_req, res) => {
  const result = await ProductsCollection.find({}).toArray();
  res.send(result);
});
app.post("/users",cors(),async(req,res)=>{
  var crypto=require('crypto');
  salt=crypto.randomBytes(16).toString('hex');
  usersCollection =database.collection("Users");
  users=req.body
  hash=crypto.pbkdf2Sync(users.password,salt,1000,64,`sha512`).toString(`hex`);
  users.password=hash
  users.salt=salt
  await usersCollection.insertOne(users)
 
  res.send(req.body)
})
app.post("/login",cors(),async(req,res)=>{
  NumberPhone=req.body.NumberPhone
  password=req.body.password

  var crypto=require('crypto');

  usersCollection=database.collection("Users")
  users= await usersCollection.findOne({NumberPhone:NumberPhone})
  if(users==null)
  response.send({"NumberPhone":NumberPhone,"message":"not exist"})
  else
  {
      hash = crypto.pbkdf2Sync(password,users.salt,1000,64,`sha512`).toString(`hex`);
      if ( users.password==hash)
      res.send(users)
      else
      res.send({"NumberPhone":NumberPhone,
                "password":password,
                "message":"wrong password"})
  }
})


