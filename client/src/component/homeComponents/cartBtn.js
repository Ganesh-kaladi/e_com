import { useCart } from '../../context/cartContext'
import { CheckCartList } from '../../assets/cart/cartFunctional'
import { useNavigate } from 'react-router-dom'

export const Cartbtn = ({ p }) => {
    const navigate = useNavigate()
    const { dispatch, cart } = useCart()
    const isCheck = CheckCartList({ id: p._id, cart })
    const HandleAddToCart = (p) => {
        !isCheck ?
            (dispatch({
                type: 'ADD_TO_CART',
                payload: p,
            })):
            (navigate('/cart'))
    }
    return (

        <div className="mt-1 text-end">
            <button className="btn btn-primary text-white mt-1 mb-2" onClick={() => HandleAddToCart(p)}>
                {
                    !isCheck ? 'Add to Cart' : 'go to cart'
                }
            </button>
        </div>
    )
}