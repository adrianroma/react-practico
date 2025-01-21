const express = require("express");

const router = express.Router();

const data = require("../controllers/data");

router.post("/data/set", express.raw({type: "application/json"}), data.setData);

router.get("/data/get", data.getData);

router.get("/data/info", data.getInfo);

module.exports = router;