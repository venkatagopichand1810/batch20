const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("hello hi how are you"))

router.get("/:id", (req, res) => res.send(`user id: ${req.params.id}`))

module.exports = router;


