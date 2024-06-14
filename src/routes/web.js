const express = require("express");

const router = express.Router();

const {
  getHomePage,
  postCreactUser,
  getCreatePage,
  getUpdatePage,
  postUpdatetUser,
  getDeleteUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);

router.get("/create", getCreatePage);

router.get("/update/:id", getUpdatePage);

router.post("/createUser", postCreactUser);

router.post("/updateUser", postUpdatetUser);

router.get("/delete/:id", getDeleteUser);

module.exports = router;
