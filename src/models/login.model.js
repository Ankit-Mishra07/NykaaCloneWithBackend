const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    name: {type: String, required: false},
    email: {type: String, required: false},
    img:{type: String, required: false}
}, {
    versionKey : false,
    timestamps: true
})


module.exports = model("user", userSchema)