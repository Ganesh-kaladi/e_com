export const CheckCartAmt = (cart)=>{
    const delivery = 19
    let subAmt =0
    for (let p of cart){
        subAmt= subAmt + parseFloat(p.price) * parseFloat(p.quantity)
    }
    let gst = (subAmt * 8) / 100
    let totalAmt = (subAmt) + gst + delivery

    return ({subAmt:subAmt.toFixed(2),
        delivery:delivery.toFixed(2),
        gst:gst.toFixed(2),
        totalAmt:totalAmt.toFixed(2)})
}