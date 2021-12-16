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

app.get("/Myorder", (req, res) => {
    return res.render("Myorder")
})
app.get("/offer", (req, res) => {
    return res.render("offer")
})



const productcontroller = require("./controllers/product.controller")

app.use("/prod", productcontroller)
app.use("/all", productcontroller)



app.get("/pages",async(req,res)=>{
    try{
        const page=+req.query.page || 10; 
        const size = +req.query.size || 15

        const skip = (page-1)*size
        const products  = await Product.find().skip(skip).limit(size).lean().exec()
        const totalpages = Math.ceil(await Product.find().countDocuments()/size)
        return res.json({products,totalpages})
      

    }catch(e)
    {

        return res.status(500).json({status:"failed",message:e.message});


    }
})



const cartController = require("./controllers/cart.controller")

app.use("/addcart", cartController)


const wishController = require("./controllers/wishlist.controller")

app.use("/addwish", wishController)
app.use("/dltwish", wishController)

const loginController = require("./controllers/login.controller")

app.use("/user", loginController)


const orderController = require("./controllers/order.controller")

app.use("/order", orderController)

module.exports = app







//db.collectionName.find({$text:{$search:”\”Phrase”\”}})