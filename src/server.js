
// -------------- Files and Modules ------------------
const express = require("express")
const path = require("path")

const mainRoutes = require("./routes/mainRoutes")
require("./db/conn")

// Important Variables 
const app = express()
const port = process.env.PORT || 5000


// ------------ MIDDLEWARES ------------------
// Serving Static Files
app.use("/static", express.static(path.join(__dirname, "../static")))

// For forms
app.use(express.urlencoded({extended: false}));

// Pug File Config
app.set("view engine", "pug");

// Router Config
app.use(mainRoutes);



// Listener 
app.listen(port, () => {
    console.log(`Server Running at http://127.0.0.1:${port}/`)
})

