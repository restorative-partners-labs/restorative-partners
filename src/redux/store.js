import { configureStore } from '@reduxjs/toolkit'
import addToCartSlice from './addToCartSlice'

export const store = configureStore({
    reducer: {
        addToCart: addToCartSlice
    },
})