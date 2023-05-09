const express = require('express');
const app = express();
const port = 3002;

const morgan = require("morgan")
app.use(morgan("combined"))

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

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
biscottiCollection = database.collection("Biscotti");
productCollection = database.collection("Product");


// customerCollection = database.collection("Customer");



app.get("/biscottis", cors(), async (_req, res) => {
  const result = await biscottiCollection.find({}).toArray();
  res.send(result);
});
app.get("/products", cors(), async (_req, res) => {
  const result = await productCollection.find({
  }).toArray();
  res.send(result);
});
//lúc nãy m để ở biến kia là _req
//nếu để là _req thì dòng 49 phải là _req.params okiii
app.get("/products/:id",cors(),async (req, res) => {
  var o_id = new ObjectId(req.params["id"]);
  const result = await productCollection.find({_id: o_id}).toArray(); //có 2 cái (_id và id) muốn lấy cái nào thì đổi lại ở dòng này
  res.send(result[0]);
});

// app.get("/customers", cors(), async (req, res) => {
//   const result = await customerCollection.find({}).toArray();
//   res.send(result);
// });

// app.get("/customer/:id", cors(), async (req, res) => {
//   var o_id = new ObjectId(req.params["id"]);
//   const result = await customerCollection.find({ _id: o_id }).toArray();
//   res.send(result[0]);
// });

// app.post("/customer", cors(), async (req, res) => {
//   await customerCollection.insertOne(req.body);
//   res.send(req.body);
// });

// app.put("/customer", cors(), async (req, res) => {
//   await customerCollection.updateOne(
//     { _id: new ObjectId(req.body._id) },
//     {
//       $set: {
//         CustomerName: req.body.CustomerName,
//         CustomerId: req.body.CustomerId,
//         Address: req.body.Address,
//         NumberPhone: req.body.NumberPhone,
//         Email: req.body.Email,
//         Gender: req.body.Gender,
//         Status: req.body.Status,
//       },
//     }
//   );
//   var o_id = new ObjectId(req.body._id);
//   const result = await customerCollection.find({ _id: o_id }).toArray();
//   res.send(result[0]);
// });

