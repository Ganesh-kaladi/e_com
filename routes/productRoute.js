const exprees = require('express')
const multer = require('multer')
const middleJwt = require('../middleware/jwt')

const {createProduct,allProduct, deleteProduct, updateProduct} = require('../controller/productController')

const upload = multer({dest:'upload/'})
const router = exprees.Router()

router.post('/create', middleJwt, upload.single('photo'), createProduct)
router.get('/all-product', allProduct)
router.delete('/del/:id', middleJwt, deleteProduct)
router.put('/update/:id', middleJwt, upload.single('photo'), updateProduct)

module.exports = router