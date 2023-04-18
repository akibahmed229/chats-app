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

const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add user
router.post(
  "/",
  avatarUpload,
  addUserValidator,
  addUserValidatorHandler,
  addUser
);

// remove user
router.delete("/:id", removeUser);

module.exports = router;
