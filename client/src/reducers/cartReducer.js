export const cartReducerFunction = (state, { type, payload }) => {
    switch (type) {
        case 'ADD_TO_CART':
            return (
                [...state, { ...payload, quantity: 1 }]
            )
        case 'INCE_CART_QUANTITY':
            return (
                state.map(p =>
                    p._id === payload.id ? { ...p, quantity: payload.quantity } : p
                )
            )
        case 'DELETE_FROM_CART':
            return state.filter(p => 
                p._id !== payload.id
            )
        default:
            return state
    }
}