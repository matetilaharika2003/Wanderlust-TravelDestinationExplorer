const express = require("express");
const app = express();

// creating router object 
const router = express.Router();


// Index - users 
router.get("/", (req, res) => {
    res.send("GET for users ");
})

// show - users
router.get("/:id", (req, res) => {
    res.send("GET for user id ");
});

// POST - users 
router.post("/", (req, res) => {
    res.send("POST for users");
})

// DELETE - for users 
router.delete("/:id", (req, res) => {
    res.send("DELETE for user id");
})

module.exports = router;