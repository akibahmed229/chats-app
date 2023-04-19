// external imports
const express = require("express");

// internal imports
const { getLogin, login, logout } = require("../controllers/login.controller");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse.middleware");
const {
  doLoginValidator,
  doLoginValidatorHandler,
} = require("../middlewares/login/loginValidator");
const {
  redirectLoggedIn,
} = require("../middlewares/common/checkLogin.middleware");

const router = express.Router();

// set page title
const page_title = "Login";

// login page
router.get("/", decorateHtmlResponse(page_title), redirectLoggedIn, getLogin);

// process login
router.post(
  "/",
  decorateHtmlResponse(page_title),
  doLoginValidator,
  doLoginValidatorHandler,
  login
);

// logout
router.delete("/", logout);

module.exports = router;
