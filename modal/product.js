const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    photo: [
        {
            product_id: { type: String, required: true },
            url: { type: String, required: true },
        },
    ],
    more_about: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    rating: {
        type: String,
        require: true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
})

module.exports = mongoose.model('product', productSchema)