import { createSlice } from '@reduxjs/toolkit'

export const checkoutSlice = createSlice({
	name: 'checkout',
	initialState: {
    checkout:[]
	},
	reducers: {
    addToCheckout: (state, { payload }) => {
      state.checkout.push(payload)
    },
	},
})

export const {addToCheckout} = checkoutSlice.actions
export default checkoutSlice.reducer
