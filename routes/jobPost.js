const express = require("express");
const router = express.Router();

const {jobPost} = require('../controllers/jobPost')

router.route("/jobs").post(jobPost);

module.exports = router;