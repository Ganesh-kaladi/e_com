const exprss = require('express')
const router = exprss.Router()
const middleJwt = require('../jwt/jwt')

const {CreateOrder} = require('../controller/orderController')


router.post('/create-order', CreateOrder)

module.exports = router