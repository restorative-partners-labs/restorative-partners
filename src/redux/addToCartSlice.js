import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    products: [],
};

const addToCartSlice = createSlice({
    name: "addToCart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            toast.success('Add To Cart successfully');
            const itemInCart = state.products.find(
                (item) => item.id === action.payload.id
            );
            if (itemInCart) {
                itemInCart.quantity += action.payload.quantity;

            } else {
                state.products.push({
                    ...action.payload,
                });
            }

        },
        removeToCart: (state, action) => {
            const itemsInCart = state.products.filter(
                (item) => item.id !== action.payload
            );
            state.products = itemsInCart;
        },
    },
});


export const {
    addToCart,
    incrementProductQuentity,
    removeToCart,
    dicrementProductQuentity,
} = addToCartSlice.actions;

export default addToCartSlice.reducer;
