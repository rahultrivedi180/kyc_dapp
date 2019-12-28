const router = require("express").Router();
const UserController = require("../controlers/UserController");
const cors = require("../middlewares/cors");

router
  .post("/addkyc", cors, UserController.addKycData)
  .post("/getkyc", cors, UserController.getKycData);

module.exports = router;
