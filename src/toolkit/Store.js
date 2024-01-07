import { configureStore } from '@reduxjs/toolkit'
import ProductsSlice from '../slices/ProductsSlice';
import CartSlice from '../slices/CartSlice';

const Store = configureStore({
    reducer:{
        products:ProductsSlice,
        cart:CartSlice
    }
})

export default Store; 