import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
    products: [],
    bookingProducts: [],
    cetegory: [],
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addBooking: (state, action) => {
            const selectedProduct = state.bookingProducts.find(bookingProducts => bookingProducts._id === action.payload._id)
            if (!selectedProduct) {
                state.bookingProducts.push({ ...action.payload, quantity: 1 })
            }
            else {
                selectedProduct.quantity = selectedProduct.quantity + 1;
            }

            toast.success("Product Added")

        }
    }
})

export const { addBooking } = productSlice.actions;

export default productSlice.reducer;