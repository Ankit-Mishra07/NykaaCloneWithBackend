const express = require("express")

const router = express.Router()
const Wish = require("../models/wishlist.model")
router.post("/", async (req, res) => {
    try{

        const wish = await Wish.create(req.body)

        return res.status(201).send(wish)

    }catch(e) {
        return res.status(500).json({status: "Failed", message: e.message})
    }
})

router.get("/", async (req, res) => {
    const wish = await Wish.find()
    return res.status(201).send(wish)
})

router.delete("/:id", async (req, res) => {
    const wish = await Wish.findByIdAndDelete(req.params.id)
    return res.send(wish)
})

module.exports = router