import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: {
            cartId: '',
        },
    },
    reducers: {
        setCartId: (state, action) => {
            state.cart = action.payload;
        },
    },
});
export const { setCartId } = cartSlice.actions;
export default cartSlice.reducer;
