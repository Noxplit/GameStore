import { createSlice } from '@reduxjs/toolkit'

export const actionSlice = createSlice({
	name: 'action',
	initialState: {
		id: 1,
		singleGame: null,
    search:null,
		isOpenMenu: false,
    cart:[],
    favorite:[]
	},
	reducers: {
		setOpenMenu: (state, { payload }) => {
			state.isOpenMenu = payload
		},
		getId: (state, { payload }) => {
			state.id = payload
		},
		setSingleGame: (state, { payload }) => {
			state.singleGame = payload
		},
    setSearchGame: (state, { payload }) => {
    state.search = payload
    },
    addToCart: (state, { payload }) => {
      state.cart.push(payload)
    },
    removeInCart: (state, { payload }) => {
      state.cart = state.cart.filter(state => state.id === payload)
    },
 
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(state => state.id !== payload)
    }
	},
})

export const { setOpenMenu, getId, setSingleGame,setSearchGame, addToCart, removeInCart, removeFromCart } = actionSlice.actions
export default actionSlice.reducer
