import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    initialState : [],
    name : "cartSlice",
    reducers : {
        addToCart: (state ,action)=>{
        const findItem = state.find((item)=>item.id===action.payload.id)
        if (findItem) {
            findItem.quantity += 1
        }else{
            const itemClone = {...action.payload, quantity: 1}
            state.push(itemClone)
        }
        },
        removeFromCart: (state ,action)=>{
            return state.filter((item)=>item.id !== action.payload.id)
        },
        clearCart: (state ,action)=>{
            return[]
        },
    },
})

export const  {addToCart ,removeFromCart,clearCart} = cartSlice.actions
export default cartSlice.reducer