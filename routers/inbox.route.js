// external imports
const express = require("express");

// internal imports
const { getInbox } = require("../controllers/inbox.controller");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse.middleware");

const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
