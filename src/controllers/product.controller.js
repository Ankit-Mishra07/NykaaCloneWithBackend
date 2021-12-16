const express = require("express")

const router = express.Router()
const Product = require("../models/products.model")
router.post("/", async (req, res) => {
    try{

        const product = await Product.create(req.body)

        return res.status(201).send(product)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get("/lotohigh", async (req, res) => {
    const products = await Product.find().sort({price : 1}).limit(15)
   return res.send(products)
})

router.get("/hitolo", async (req, res) => {
    const products = await Product.find().sort({price : -1}).limit(15)
   return res.send(products)
})
module.exports = router