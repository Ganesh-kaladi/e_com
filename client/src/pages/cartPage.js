import { CartAmtCheckList } from "../component/cartPageComponent.js/checkList"
import { Cartproductlistcomponent } from "../component/cartPageComponent.js/cartProductList"
import { useCart } from "../context/cartContext"
import { Addresscomponent } from "../component/cartPageComponent.js/addressComponent"
import { useNavigate} from 'react-router-dom'

export const Cartpagecomponent = ()=>{
    const navigate = useNavigate()
    const {cart} = useCart()
    return(
        <main style={{minHeight:'80vh'}} className="mt-6">
            {
                !cart.length > 0 ?
                (<div className="text-center pt-8">
                    <h5 className="h5">Cart is empty</h5>
                    <button className="btn btn-secondary" onClick={()=>navigate('/')}>Shopping Now</button>
                </div>):
                (<div>
                    <Cartproductlistcomponent />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <Addresscomponent />
                            </div>
                            <div className="col-md-4">
                                <CartAmtCheckList />
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </main>       
    )
}