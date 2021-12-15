const express = require("express")

const app = express()

const Product = require("./models/products.model")

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

app.get("/getapp", (req, res) => {

    return res.render("getapp")

})


app.get("/help", (req, res) => {
    return res.render("help")
})
app.get("/ProductNykaaCosmetics",async (req, res) => {
    const product = await Product.find()
    return res.render("ProductNykaaCosmetics")
})

app.get("/all", async (req, res) => {
    const products = await Product.find().limit(15)
   return res.send(products)
})

app.get("/Myprofile", (req, res) => {
    return res.render("Myprofile")
})

app.get("/ProductDetail", (req, res) => {
    return res.render("ProductDetail")
})
app.get("/success", (req, res) => {
    return res.render("sucess")
})
app.get("/address", (req, res) => {
    return res.render("address")
})

app.get("/payment", (req, res) => {
    return res.render("payment")
})

app.get("/Mywish", (req, res) => {
    return res.render("Mywish")
})

app.get("/offer", (req, res) => {
    return res.render("offer")
})








const productcontroller = require("./controllers/product.controller")

app.use("/prod", productcontroller)

module.exports = app







//db.collectionName.find({$text:{$search:”\”Phrase”\”}})