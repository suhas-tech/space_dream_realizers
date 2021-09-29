const express = require("express");
const router = express.Router();

const { register, authenticate, checkToken } = require("../controllers/user");
const { withAuth } = require("../middleware");

router.post("/api/register", register);

router.post("/api/authenticate", authenticate);

router.get("/api/checkToken", withAuth, checkToken);

module.exports = router;
