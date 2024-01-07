import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts =  createAsyncThunk("productsSlice/fetchProducts",
    async()=>{
        const res =  await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        return data
})

const  productsSlice = createSlice({
    initialState:[],
    name:"productsSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            return action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.error(action.error);
        });
    }
})


export  const {} = productsSlice.actions;
export default  productsSlice.reducer