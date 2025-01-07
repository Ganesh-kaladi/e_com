const jwt = require('jsonwebtoken')


const loginAccessToken = async (data) => {
   
        const payload = {
            ...data
        }
        const option = {
            expiresIn: "1h",
            issuer: "ecommerce",
        }
        return jwt.sign(payload, "ssss", option)
   
}

module.exports = { loginAccessToken }