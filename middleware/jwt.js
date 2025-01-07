const jwt = require('jsonwebtoken')

module.exports = async (req, res, next)=> {
    try {
        const token = req.header("Authorization")?.split(" ")[1];
        if (!token) {
          return res.status(401).json({ error: "No token provided" });
        }
        let decode = jwt.verify(token, "ssss")
        req.user = decode
        next()
    }
    catch (err) {
        console.log(`err jwt ${err}`)
    }
}