const express = require("express");
const app = express();
const port = 3002;

const morgan = require("morgan");
app.use(morgan("combined"));

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true,limit: "10mb" }));
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
// customerCollection = database.collection("Customer");
//orderCollection = database.collection("Order");

biscottiCollection = database.collection("Product");

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

//QNT thêm 2h48' 24/04/2023
// cài đặt khởi tạo đối tượng Cookie
var cookieParser = require('cookie-parser');
app.use(cookieParser());

//cài đặt khởi tạo đối tượng Session
var session = require('express-session');
app.use(session({secret: "Shh, its a secret!"}));

//Xử lý API POST để thêm sản phẩm vào Cart trong session
app.post("/cart",cors(),(req,res)=>{
  var product = req.body;
  if(req.session.cart==null){
    req.session.carts = [];    
  }
  req.session.carts.push(product)
  res.send(product)
})

// Xử lý API GET để lấy danh sách sản phẩm trong Cart từ session
app.get("/cart",cors(),(req,res)=>{
  res.send(req.session.carts)
})

//Xử lý API GET để lấy thông tin sản phẩm trong Cart dựa trên ID từ session
app.get("/cart/:id", cors(), (req, res) => {
  if (req.session.cart != null) 
  {
    var productId = req.params.id;
    var product = req.session.cart.find((x) => x.id == productId);
    res.send(product);
  }
  else {
    res.send(null);
  }
});

//Xử lý API DELETE để xóa sản phẩm trong Cart dựa trên ID từ Session
app.delete("/cart/:id", cors(), (req, res) => {
  if (req.session.cart != null) {
    var productId = req.params.id;
    req.session.cart = req.session.cart.filter((x) => x.id !== productId);
  }
  res.send(req.session.cart);
});

//Xử lý API PUT để cập nhật số lượng sản phẩm trong Cart dựa trên ID từ Session

app.put("/cart", cors(), (req, res) => {
  if (req.session.cart != null) 
  {
    var productId = req.body.id;
    var quantity = req.body.quantity;
    var product = req.session.cart.find((x) => x.id == productId);
    if (product != null) {
      product.quantity = quantity;
    }
  }
  res.send(req.session.cart);
});
