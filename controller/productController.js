const productModel = require('../modal/product')
const cloudinary = require("../cloud/cloud")


//create product
const createProduct = async (req, res) => {
    const { title, description, price, more_about, category, rating } = req.body
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        const result = await cloudinary.uploader.upload(req.file.path);
        const img = [
            {
                product_id: result.public_id, // Save the public_id for later reference
                url: result.secure_url,
            },
        ];
        if (!req.user || !req.user.user_id) {
            return res.status(401).json({ error: "User not authenticated" });
        }
        const product = new productModel({
            title, description, price, more_about, category, rating,
            photo: img,
            user: req.user.user_id
        })
        await product.save()
        res.json({message:'product is uploded.'})
    }
    catch (err) {
        console.log('create product err', err)
        res.send('servser error')
    }
}

//get all products
const allProduct = async (req, res) => {
    try {
        const product = await productModel.find()
        res.status(200).json(product)
    }
    catch (err) {
        console.log(`all products err ${err}`)
        res.send('server error')
    }
}

//
const deleteProduct = async (req, res) => {
    if (!req.user) {
        return res.json({ message: 'user must be authenticate' })
    }
    try {
        const product = await productModel.findById(req.params.id)
        if (!product) {
            return res.json({ message: 'product was not found.' })
        }
        let public_id = product.photo[0].product_id
        if (public_id) {
            try {
                const cloudDel = await cloudinary.uploader.destroy(public_id)
                console.log('deleted', cloudDel)
            }
            catch (err) {
                console.log(err)
            }
        }

        await productModel.deleteOne({ _id: req.params.id })
        res.status(200).json({
            message: 'product id deleted'
        })
    }
    catch (err) {
        console.log('delete product err :', err)
        return res.json({ message: 'server error' })
    }
}

//update product
const updateProduct = async (req, res) => {
    if (!req.user) {
        return res.json({ message: 'user must be authenticate.' })
    }
    try {
        const product = await productModel.findById(req.params.id)
        if (!product) {
            return res.json({ message: 'product was not found' })
        }
        if (req.file) {
            let public_id = product.photo.product_id
            try {
                const result = await cloudinary.uploader.destroy(public_id)
                console.log('cloud img delete:', result)
            }
            catch (err) {
                console.log(err)
                return res.send('cloud error')
            }
            const result = await cloudinary.uploader.upload(req.file.path)
            product.photo = [
                {
                    product_id: result.public_id, // Save the public_id for later reference
                    url: result.secure_url,
                },
            ];
        }

        Object.keys(req.body).forEach((key) => {
            product[key] = req.body[key]
        })
        await product.save()
        res.json(product)
    }
    catch (err) {
        console.log('upaftae product err:', err)
        res.json({ message: 'server error' })
    }
}

//get single product details
const getProductDetails = async (req, res)=>{
    try{

    }
    catch(err){
        console.log('getProductDetails err :', err)
        return res.send('server error.')
    }
}

module.exports = { createProduct, allProduct, deleteProduct, updateProduct }