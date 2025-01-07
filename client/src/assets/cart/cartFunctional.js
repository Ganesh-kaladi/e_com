export const CheckCartList = ({id, cart})=>{
    return cart.some((p)=>
        p._id===id
    )
}