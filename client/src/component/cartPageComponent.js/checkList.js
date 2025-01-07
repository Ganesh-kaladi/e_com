import { CheckCartAmt } from "../../assets/cart/checklistAmt"
import { useCart } from "../../context/cartContext"

export const CartAmtCheckList = () => {
    const { cart } = useCart()
    let { subAmt, delivery, gst, totalAmt } = CheckCartAmt(cart)
    return (
        <section className=" me-5 py-4">
            <div style={{ width: 'auto' }} className="ms-auto bg-primary rounded-2 px-3 pt-2 pb-1">
                <h2 className="text-center mb-3 border-bottom" >Cart</h2>
                <div className="d-flex justify-content-between my-2" >
                    <span>Sub Total</span>
                    <span className="fw-semibold fs-5" >₹ {subAmt}/-</span>
                </div>
                <div className="d-flex justify-content-between my-2" >
                    <span>Delivery Charge</span>
                    <span className="fw-semibold fs-5" >₹ {delivery}/-</span>
                </div>
                <div className="d-flex justify-content-between my-2 border-bottom pb-2">
                    <span>Inc.all taxs</span>
                    <span className="fw-semibold fs-5">₹ {gst}/-</span>
                </div>
                <div className="d-flex justify-content-between mb-4 border-bottom pb-2">
                    <span>Total Amount</span>
                    <span className="fw-bold fs-5" >₹ {totalAmt}/-</span>
                </div>
                <div className="text-center mb-2">
                    <button className="btn btn-light">Buy Now</button>
                </div>
            </div>
        </section>
    )
}