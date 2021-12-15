const express = require("express")

const router = express.Router()
const Cart = require("../models/cart.model")
router.post("/", async (req, res) => {
    try{

        const cart = await Cart.create(req.body)

        return res.status(201).send(cart)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get("/", async (req, res) => {
    const cart = await Cart.find()
    return res.send(cart)
})

router.delete("/:id", async (req, res) => {
    const cart = await Cart.findByIdAndDelete(req.params.id)
    return res.send(cart)
})

module.exports = router