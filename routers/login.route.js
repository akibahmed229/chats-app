// external imports
const express = require("express");

// internal imports
const { getLogin } = require("../controllers/login.controller");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse.middleware");

const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;
