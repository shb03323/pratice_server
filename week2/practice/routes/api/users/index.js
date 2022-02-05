const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
    const result = {
        status: 200,
        message: "login router",
    };
    res.status(200), send(result);
});

router.post("/signup", (req, res) => {
    const result = {
        status: 200,
        message: "signup router",
    };
    res.status(200), send(result);
});

module.exports = router;