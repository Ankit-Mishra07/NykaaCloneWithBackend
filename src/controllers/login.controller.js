const express = require("express")

const router = express()
const User = require("../models/login.model")
router.post("/", async (req, res) => {

   const  user = await User.create(req.body)
    return res.status(201).send(user)
    // let user = await User.findOne({email : req.body.email})
    // if(user) {
    //     return res.status(201).send(user)
    // }else {
    //  user = await User.create(req.body)
    // return res.status(201).send(user)
    // }
})

router.get("/", async (req, res) => {
    const user = await User.find()
    return res.status(201).send(user)
})

router.delete("/", async (req, res) => {
    const user = await User.findByIdAndDelete()
})

module.exports = router