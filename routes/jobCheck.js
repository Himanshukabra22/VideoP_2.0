const express = require("express");
const router = express.Router();

const {jobCheck} = require('../controllers/jobCheck')

router.route("/jobCheck/:jobId").get(jobCheck);

module.exports = router;