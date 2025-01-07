const express = require('express')
const router = express.Router()
const middleJwt = require('../middleware/jwt')

const {userRegistration, userLogin, userDetails} = require('../controller/userController')


router.post('/user-register', userRegistration)
router.post('/login', userLogin)
router.get('/profile',middleJwt, userDetails)

module.exports = router