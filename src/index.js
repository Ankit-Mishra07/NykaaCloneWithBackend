const express = require("express")

const app = express()

app.use(express.json())
app.use(express.static("public"))
app.set("view engine" , "ejs")







app.get("/", (req, res) => {
    res.render("index")
})


app.get("/login", (req, res) => {
    res.render("Signin")
})



app.get("/auth/google/failure", function (req, res) {
    return res.send("Something went wrong")
})
















const productcontroller = require("./controllers/product.controller")

app.use("/prod", productcontroller)

module.exports = app


