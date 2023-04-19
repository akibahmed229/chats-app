// external imports
const express = require("express");

// internal imports
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controllers/users.controller");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse.middleware");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidator,
  addUserValidatorHandler,
} = require("../middlewares/users/userValidator");
const { checkLogin } = require("../middlewares/common/checkLogin.middleware");

const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Users"), checkLogin, getUsers);

// add user
router.post(
  "/",
  checkLogin,
  avatarUpload,
  addUserValidator,
  addUserValidatorHandler,
  addUser
);

// remove user
router.delete("/:id", removeUser);

module.exports = router;
