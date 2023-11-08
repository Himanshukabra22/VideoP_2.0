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

const jobCheck = async (req, res) => {
  const jobId = req.params.jobId;
  try {
    let value = await dataModel.findOne({ cryptostring: jobId });
    if (
      value === null ||
      Math.floor((Date.now() - Number(value.date)) / (1000 * 60 * 60 * 24)) > 1
    ) {
      return res
        .status(404)
        .json({ status: "not ok", message: "Job not found." });
    }

    const job = await videoQueue.getJob(value.id);

    if (job === null) {
      return res
        .status(404)
        .json({ status: "not ok", message: "Job not found." });
    }

    const jobFinished = await job.finished();

    if (jobFinished !== null) {
      const isFailed = await job.isFailed();

      if (isFailed) {
        return res
          .status(500)
          .json({ status: "not ok", message: "Job processing failed." });
      }

      const isCompleted = await job.isCompleted();

      if (isCompleted) {
        return res
          .status(200)
          .json({ status: "ok", message: "Job processed completely." });
      } else {
        return res
          .status(404)
          .json({ status: "not ok", message: "Job not found." });
      }
    }
    return res.status(201).json({
      status: "ok",
      message: "Job is under process.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "not ok", message: "error" });
  }
};

module.exports = { jobCheck };
