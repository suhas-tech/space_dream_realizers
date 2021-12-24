const express = require("express");
const router = express.Router();

const { register, authenticate, checkToken } = require("../controller/user");
const { withAuth } = require("../middleware");

const {submitContactRequest} = require("../controller/user");

// router.post("/api/register", register);

// router.post("/api/authenticate", authenticate);

// router.get("/api/checkToken", withAuth, checkToken);

router.post("/api/submitContactRequest", submitContactRequest)

module.exports = router;
