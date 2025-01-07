const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

//create user model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    mobile: {
        type: String,
        require: true,
        unique: true
    },
    role: {
        type: String,
        default: "user",
    },
    password: {
        type: String,
        require: true
    }
})

userSchema.pre("save", async function (next) {
    if (this.isModified("password") === false) {
        next();
    }
    const saltRolls = 10;
    salt = await bcrypt.genSalt(saltRolls)
    hash = await bcrypt.hash(this.password, salt)
    this.password = hash
})

userSchema.methods.isValidPassword = async (password, hash_password) => {
    return await bcrypt.compare(password, hash_password);
}




module.exports = mongoose.model('user', userSchema)