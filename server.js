const express = require("express");
const fs = require("fs");
const path = require("path")
const cors = require("cors");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const {deleteOldFiles} = require("./functions/deleteOldFiles.js")
require("dotenv").config();

//Files
const dbconnect = require("./db/connection.js");
const dataModel = require("./db/model.js");
const videoQueue = require("./jobProcessor.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


const jobPost = require("./routes/jobPost.js")
const jobCheck = require("./routes/jobCheck.js")
const jobDownload = require("./routes/jobDownload.js")


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


// //Agent APIs
app.use("/api/",jobPost);
app.use("/api/",jobCheck);
app.use("/api/",jobDownload);


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.get("/", (req, res) => {
  res.send("Hello!!");
});

const serverStart = async () => {
  try {
    setInterval(deleteOldFiles, 3600000);
    await dbconnect(process.env.MONGO_URI);
    console.log("Connected to the DB");
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

deleteOldFiles();
serverStart();
