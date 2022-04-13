// ------------------ Modules and Files --------------
const express = require("express")
const validator = require("validator")

const router = new express.Router();


// End Points 
router.get("/", (req, res) => {
    res.status(200).render("index.pug")
})


module.exports = router

