const express = require("express");
const router = express.Router();

const getRouter = require("./get");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Blog API");
});
router.use("/get", getRouter);

module.exports = router;
