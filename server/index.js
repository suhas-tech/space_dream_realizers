const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");
var http = require("http");

const userRoutes = require("./routes/user")

const app = express();
var cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// const mongo_uri = "mongodb://localhost/np-main";

// mongoose.connect(mongo_uri, { useNewUrlParser: true }, function (err) {
//   if (err) {
//     throw err;
//   } else {
//     console.log(`Successfully connected to ${mongo_uri}`);
//   }
// });

app.use(userRoutes);

app.use(express.static(path.join(__dirname, "../client", "build")));

app.get("/files/:id", function (req, res) {
  res.sendFile(path.join(__dirname, "files", req.params.id));
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = 4001;
app.listen(port, () => {
  console.log("listening at port " + port);
});
