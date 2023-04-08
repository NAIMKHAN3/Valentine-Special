import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
    products: [],
    bookingProducts: "",
    filter: [],
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
            if (state.filter === action.payload) {
                state.filter = ""
            }
            else {
                state.filter = action.payload;
            }
        },
        setProduct: (state, action) => {
            state.products = action.payload;
        }
    }
})

export const { addBooking, deleteBooking, filterProduct, setProduct } = productSlice.actions;

export default productSlice.reducer;