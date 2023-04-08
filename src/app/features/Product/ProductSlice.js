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

        },
        deleteBooking: (state, action) => {
            const selectedProduct = state.bookingProducts.find(bookingProducts => bookingProducts._id === action.payload._id)
            if (selectedProduct.quantity > 1) {
                selectedProduct.quantity = selectedProduct.quantity - 1;
                toast.success("Remove Product")
            }
            else {
                const deleteProduct = state.bookingProducts.filter(bookingProducts => bookingProducts._id !== action.payload._id)
                state.bookingProducts = deleteProduct;
            }
        },
        filterProduct: (state, action) => {
            const selectedCetegory = state.cetegory.find(cetegory => cetegory === action.payload)
            if (!selectedCetegory) {
                state.cetegory.push(action.payload)
            } else {
                state.cetegory = state.cetegory.filter(cetegory => cetegory !== action.payload)
            }

        }
    }
})

export const { addBooking, deleteBooking } = productSlice.actions;

export default productSlice.reducer;