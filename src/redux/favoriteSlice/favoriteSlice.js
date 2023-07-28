import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: {
    favorite:[]
	},
	reducers: {
    removeFromFavorite: (state, { payload }) => {
      state.favorite = state.favorite.filter(state => state.id === payload)
    },
    removeFromFavoritePage: (state, { payload }) => {
      state.favorite = state.favorite.filter(state => state.id !== payload)
    },
    addToFavorite: (state, { payload }) => {
      state.favorite.push(payload)
    },
	},
})

export const {removeFromFavorite, addToFavorite, removeFromFavoritePage } = favoriteSlice.actions
export default favoriteSlice.reducer
