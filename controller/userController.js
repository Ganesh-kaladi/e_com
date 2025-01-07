const usermodel = require('../modal/user')
const {loginAccessToken} = require('../jwt/jwt')


//user registration
const userRegistration = async (req, res) => {
    try {
        const { username, email, mobile, password } = req.body
        let isExist = await usermodel.findOne({ email })
        if (isExist) {
            return res.status(404).send('user already registered')
        }
        let isMobile = await usermodel.findOne({ mobile })
        if (isMobile) {
            return res.status(400).send('mobile already number registered.')
        }
        const userDetails = new usermodel({
            username, email, mobile, password
        })
        userDetails.save()
        return res.status(200).send('registrtion is successfully completed.')
    }
    catch {
        console.log(`error at user registration ${err}`)
        return res.status(500).send('server error')
    }
}

//login
const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        let isExist = await usermodel.findOne({ email })
        if (!isExist) {
            return res.status(404).send('user not register.')
        }
        const hash_password = await isExist.isValidPassword(password, isExist.password)
        if(!hash_password){
            return res.status(404).send('emil or password are not match.')
        }
        const accessToken = await loginAccessToken({
            user_id:isExist.id,
            username:isExist.username
        })
        const userData = isExist.toObject()
        delete userData.password

        res.json({user:userData, accessToken})

    }
    catch(err){
        console.log(`error at user login ${err}`)
        return res.status(500).send('server error')
    }
}

//get user details
const userDetails = async (req, res)=>{
    try{
        const user_id = req.user.user_id
        const user = await usermodel.findById(user_id).select("-password -__v")
        return res.status(200).send(user)
    }
    catch(err){
        console.log(`error at user details ${err}`)
        return res.status(500).send('server error')
    }
}



module.exports = { userRegistration, userLogin, userDetails }