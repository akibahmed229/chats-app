// external imports
const express = require("express");

// internal imports
const { getUsers } = require("../controllers/users.controller");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse.middleware");

const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Users"), getUsers);

module.exports = router;
