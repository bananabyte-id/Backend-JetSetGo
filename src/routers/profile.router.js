const express = require("express");
const router = express.Router();
const controller = require("../controllers/profile.controller");

router.put("/:id", controller.update);

module.exports = router;