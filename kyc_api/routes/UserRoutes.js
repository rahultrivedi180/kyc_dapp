const router = require("express").Router();
const UserController = require("../controlers/UserController");
const cors = require("../middlewares/cors");

router.post("/kyc", cors, UserController.addKyc);

module.exports = router;
