const orderModel = require('../modal/order')

//create order
const CreateOrder = async (req, res)=>{
    if (!req.user || !req.user.user_id) {
        return res.status(401).json({ error: "User not authenticated" });
    }
    try{
        const input = req.body
        const isExist = await orderModel.findById(input.items.productId)
        if(isExist){
            return res.json({message:'product already in cart'})
        }
        const order = new orderModel({
            input
        })
        order.save()
        res.status(200).json({message:'product added to cart.'})
    }
    catch(err){
        console.log('create order',err)
        res.status(500).json({message:'internal error'})
    }
}

module.exports = {CreateOrder }