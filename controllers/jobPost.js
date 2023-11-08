const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const crypto = require("crypto");
const bodyParser = require("body-parser");

const dbconnect = require("../db/connection.js");
const dataModel = require("../db/model.js");
const videoQueue = require("../jobProcessor.js");

require("dotenv").config();

const jobPost = async (req, res) => {
  const videoLink = req.body.videoLink;
  try {
    const job = await videoQueue.add({ videoLink });
    if (job) {
      let cryptostring = crypto.randomBytes(3).toString("hex");
      const user = await dataModel.create({
        url: videoLink,
        id: job.id,
        cryptostring,
        date: Date.now(),
      });
      if (user) {
        res.json({
          status: "ok",
          message: "Video is added for further processing",
          jobId: cryptostring,
        });
      }
    } else {
      res.json({
        status: "not ok",
        message: "Job created but not saved in db.",
      });
    }
  } catch (error) {
    res.json({ status: "not ok", error });
  }
};

module.exports = { jobPost };
