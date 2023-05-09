const express = require('express');
const app = express();
const port = 3002;

const morgan = require("morgan")
app.use(morgan("combined"))


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb" }));
app.use(express.json());


const cors = require("cors");
app.use(cors())

app.listen(port, () => {
  console.log(`My Server listening on port ${port}`)
});
app.get("/", (_req, res) => {
  res.send("Hello Restful API")
});

const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("EcohealData");


// connect to collection
producttypicalCollection =database.collection("ProductTypical")
customerCollection = database.collection("Customer");
biscottiCollection = database.collection("Biscotti");
ProductsCollection = database.collection("Products");
UsersCollection= database.collection("Users");
productCollection= database.collection("Product");

// chitietdonhangCollection = database.collection("Chitietdonhang");
// tintucsongkhoeCollection = database.collection("Tintucsongkhoe");

app.get("/biscottis", cors(), async (_req, res) => {
  const result = await biscottiCollection.find({}).toArray();
  res.send(result);
});
app.get("/products", cors(), async (_req, res) => {
  const result = await productCollection.find({
  }).toArray();
  res.send(result);
});
///get sp tieu bieu
app.get("/producttypical", cors(), async (_req, res) => {
  const result = await producttypicalCollection.find({
  }).toArray();
  res.send(result);
});

//CUTSOMER
app.get("/customers", cors(), async (_req, res) => {
  const result = await customerCollection.find({}).toArray();
  res.send(result);
});
//lúc nãy m để ở biến kia là _req
//nếu để là _req thì dòng 49 phải là _req.params okiii
app.get("/products/:id",cors(),async (req, res) => {
  var o_id = new ObjectId(req.params["id"]);
  const result = await productCollection.find({_id: o_id}).toArray(); //có 2 cái (_id và id) muốn lấy cái nào thì đổi lại ở dòng này
  res.send(result[0]);
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










app.post("/product", cors(), async (req, res) => {
  await productsCollection.insertOne(req.body);
  console.log("req: ", req.body);
  res.send(req.body);
});
app.put("/product", cors(), async (req, res) => {
  await productsCollection.updateOne(
    { _id: new ObjectId(req.body._id) },
    {
      $set: {
        name: req.body.name,
        type: req.body.type,
        describe: req.body.describe,
        price: req.body.price,
        sold: req.body.sold,
        img_url: req.body.img_url,
      },
    }
  );
  var o_id = new ObjectId(req.body._id);
  const result = await productsCollection.find({ _id: o_id }).toArray();
  res.send(result[0]);
});
app.delete("/product/:id", cors(), async (req, res) => {
  var o_id = new ObjectId(req.params["id"]);
  const result = await productsCollection.find({ _id: o_id }).toArray();
  await productsCollection.deleteOne({ _id: o_id });
  res.send(result[0]);
});


//chitietdonhang
app.get("/chitietdonhang", cors(), async (_req, res) => {
  const result = await chitietdonhangCollection.find({}).toArray();
  res.send(result);
});
app.get("/chitietdonhang/:id", cors(), async (req, res) => {
  var o_id = new ObjectId(req.params["id"]);
  const result = await chitietdonhangCollection.find({ _id: o_id }).toArray();
  res.send(result[0]);
});


//tintucsongkhoe
app.get("/tintucsongkhoe", cors(), async (_req, res) => {
  const result = await tintucsongkhoeCollection.find({}).toArray();
  res.send(result);
});
app.get("/tintucsongkhoe/:id", cors(), async (req, res) => {
  var o_id = new ObjectId(req.params["id"]);
  const result = await tintucsongkhoeCollection.find({ _id: o_id }).toArray();
  res.send(result[0]);
});
app.post("/tintucsongkhoe", cors(), async (req, res) => {
  await tintucsongkhoeCollection.insertOne(req.body);
  console.log("req: ", req.body);
  res.send(req.body);
});


 app.put("/product", cors(), async (req, res) => {
  await productsCollection.updateOne(
   { _id: new ObjectId(req.body._id) },
   {
      $set: {
        name: req.body.name,
        type: req.body.type,
        describe: req.body.describe,
        price: req.body.price,
        sold: req.body.sold,
         img_url: req.body.img_url,
       },
    }
  );
   var o_id = new ObjectId(req.body._id);
   const result = await productsCollection.find({ _id: o_id }).toArray();
  res.send(result[0]);
 });
app.delete("/tintucsongkhoe/:id", cors(), async (req, res) => {
  var o_id = new ObjectId(req.params["id"]);
  const result = await tintucsongkhoeCollection.find({ _id: o_id }).toArray();
  await tintucsongkhoeCollection.deleteOne({ _id: o_id });
  res.send(result[0]);
});



