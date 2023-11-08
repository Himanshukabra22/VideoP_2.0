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

const jobDownload = async (req, res) => {
  const jobId = req.params.jobId;
  try {
    let value = await dataModel.findOne({ cryptostring: jobId });
    if (
      value === null ||
      Math.floor((Date.now() - Number(value.date)) / (1000 * 60 * 60 * 24)) > 1
    ) {
      // console.log("Hello from 1st");
      return res
        .status(404)
        .json({ status: "not ok", message: "Job not found." });
    }

    const job = await videoQueue.getJob(value.id);

    // if (job.failedReason !== undefined) {
    //   return res
    //     .status(102)
    //     .json({ status: "not ok", message: "Job processing failed." });
    // }

    const jobFinished = await job.finished();
    // console.log(`Job finished : ${jobFinished[1]}`);

    if (jobFinished !== null) {
      const isFailed = await job.isFailed();

      if (isFailed)
        return res
          .status(500)
          .json({ status: "not ok", message: "Job processing failed." });

      const isCompletedJob = await job.isCompleted();

      if (isCompletedJob) {
        const videoPath = path.join(
          __dirname,
          "../output_files",
          job.returnvalue.processedVideo
        ); // Path to the video file

        // console.log(videoPath);

        // Check if the file exists
        if (fs.existsSync(videoPath)) {
          // Set the appropriate headers for the response
          res.setHeader("Content-Type", "video/mp4");
          res.setHeader(
            "Content-Disposition",
            "attachment; filename=video.mp4"
          );

          // Create a readable stream from the video file
          const stream = fs.createReadStream(videoPath);

          // Pipe the stream into the response to download the file
          return stream.pipe(res);
        } else {
          // console.log("Hello from 2nd");
          return res
            .status(404)
            .json({ status: "not ok", message: "File not found." });
        }
      }
    }
    return res.status(201).json({
      status: "ok",
      message: "Job is under process.",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "not ok", message: "Internal Server Error." });
  }
};

module.exports = { jobDownload };
