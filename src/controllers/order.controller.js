const express = require("express")

const router = express.Router()
const Order = require("../models/order.model")
router.post("/", async (req, res) => {
    try{

        const order = await Order.create(req.body)

        return res.status(201).send(order)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get("/", async (req, res) => {
    const order = await Order.find()
    return res.send(order)
})

router.delete("/:id", async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id)
    return res.send(order)
})

module.exports = router