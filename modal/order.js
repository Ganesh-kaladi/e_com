const mongoose = require('mongoose')
const product = require('./product')

const orderSchema = new mongoose.Schema({
    //user who ordered
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    shipping: {
        name: {
            type: String,
            require: true
        },
        address: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        state: {
            type: String,
            require: true
        },
        pincode: {
            type: Number,
            require: true
        },
        mobile: {
            type: Number,
            require: true
        }
    },
    items:
        {
            price: {
                type: String,
                require: true
            },
            quantity: {
                type: Number,
                require: true
            },
            productId: {
                type: mongoose.Schema.ObjectId,
                ref: 'product',
                require: true
            }
        },
    paymentInfo: {
        id: {
            type: String,
            require: true
        },
        status: {
            type: String,
            require: true
        }
    },

    paidAt: {
        type: Date,
    },
    orderStatus:{
        type:String,
        require:true,
        default:'Processing'
    },
    deliveredAt:Date,
    createAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('order', orderSchema)