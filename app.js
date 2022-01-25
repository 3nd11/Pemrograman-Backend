const express = require("express");
const router = require("./routes/api.js");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(router);


port = 3000

app.listen(port, () => console.log("Server Jalan"));