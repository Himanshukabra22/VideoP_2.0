const express = require("express");
const router = express.Router();

const {jobDownload} = require('../controllers/jobDownload')

router.route("/jobs/:jobId").get(jobDownload);

module.exports = router;