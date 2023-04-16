const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
app.use(morgan("combined"));
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.get("/", (_req, res) => {
  res.send("Hello Restful API");
});
app.listen(port, () => {
  console.log(`My Server listening on port ${port}`);
});
const cors = require("cors");
app.use(cors());
