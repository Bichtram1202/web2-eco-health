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
  res.send("This Web server is processed for MongoDB");
});
app.listen(port, () => {
  console.log(`My Server listening on port ${port}`);
});

let promotionData = [
  {
    Id: "1",
    PromotionName: "Summer is comming",
    Used: 12,
    Describe:
      "Chào mừng mùa hè, EcoHeal mang đến cho các bạn chương trình MÙA HÈ với một số ưu đãi cực kỳ hấp dẫn",
    Start: "01/06/2023",
    End: "01/07/2023",
    ProductType: "biscotti",
    Customer: "Tất cả",
  },
];

app.get("/promotions", cors(), (_req, res) => {
  res.send(promotionData);
  console.log("database: ", promotionData);
});
app.put("/promotions", cors(), (_req, res) => {
  promotion = promotionData.find((x) => x.Id == _req.body.Id);
  if (promotion != null) {
    promotion.Start = _req.body.Start;
    promotion.End = _req.body.End;
    promotion.ProductType = _req.body.ProductType;
  }
  res.send(promotionData);
});
const { MongoClient, ObjectId } = require("mongodb");
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("EcohealData");

// connect to collection
customerCollection = database.collection("Customer");
biscottiCollection = database.collection("Biscotti");
productsCollection = database.collection("Products");

app.get("/biscottis", cors(), async (_req, res) => {
  const result = await biscottiCollection.find({}).toArray();
  res.send(result);
});

//CUTSOMER
app.get("/customers", cors(), async (_req, res) => {
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

//PRODUCT
app.get("/products", cors(), async (_req, res) => {
  const result = await productsCollection.find({}).toArray();
  res.send(result);
});
app.get("/product/:id", cors(), async (req, res) => {
  var o_id = new ObjectId(req.params["id"]);
  const result = await productsCollection.find({ _id: o_id }).toArray();
  res.send(result[0]);
});

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
