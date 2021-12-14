const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    email : {type: String, required: false, unique: true},
    password: {type: String, required: false},
    profile: {type: String, required: true},
}, {
    versionKey : false,
    timestamps :  true
})

userSchema.pre("save", function (next) {
    if(!this.isModified("password")) {return next()}

    bcrypt.hash(this.password, 10, (err, hash) => {
        this.password = hash;
        return next()
    })
})

userSchema.methods.checkPassword = function(password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, function(err, same) {
            if(err) {return reject(err)}
            return resolve(same)
        })
    })
}

module.exports = mongoose.model("user", userSchema)