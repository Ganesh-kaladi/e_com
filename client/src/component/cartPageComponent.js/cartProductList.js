import { useCart } from "../../context/cartContext"

export const Cartproductlistcomponent = () => {
    const { cart, dispatch } = useCart()
    console.log(cart)
    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return
        dispatch({
            type: 'INCE_CART_QUANTITY',
            payload: {
                id: id,
                quantity: quantity,
            },
        })
    }
    const removeFromCart = (id)=>{
        console.log(id)
        dispatch({
            type:'DELETE_FROM_CART',
            payload:id,
        })
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <table style={{ width: "100%" }} className="table">
                            <thead>
                                <tr className="">
                                    <th style={{ width: "55%" }} className="text-center">product</th>
                                    <th style={{ width: "15%" }} className="text-center">Quantity</th>
                                    <th style={{ width: "15%" }} className="text-center">price</th>
                                    <th style={{ width: "15%" }} className="text-center">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.length > 0 && cart.map(p => {
                                        return (
                                            <tr>
                                                <td>
                                                    <div className="container">
                                                        <div className="d-flex">
                                                            <div>
                                                                <img src={p.photo[0].url} alt='...' style={{ height: "140px", width: '140px' }} />
                                                            </div>
                                                            <div className="ms-4">
                                                                <h6>{p.title}</h6>
                                                                <span>₹ {p.price}/-</span>
                                                                <p>Rating : {p.rating}/-</p>
                                                                <button className="btn btn-primary btn-sm" onClick={()=>removeFromCart(p._id)}>Remove from Cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center align-middle">
                                                    <button className="btn btn-sm btn-outline-secondary mx-1" onClick={() => updateQuantity(p._id, p.quantity - 1)} >-</button>
                                                    <span className="mx-1">{p.quantity}</span>
                                                    <button className="btn btn-sm btn-outline-secondary mx-1" onClick={() => updateQuantity(p._id, p.quantity + 1)} >+</button>
                                                </td>
                                                <td className="text-center align-middle">
                                                    ₹ {p.price}/-
                                                </td>
                                                <td className="text-center align-middle">₹ {(p.quantity * p.price).toFixed(2)}/-</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}