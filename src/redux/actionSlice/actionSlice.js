import { createSlice } from '@reduxjs/toolkit'

export const actionSlice = createSlice({
	name: 'action',
	initialState: {
		id: 1,
		singleGame: null,
		isOpenMenu: false,
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
	},
})

export const { setOpenMenu, getId, setSingleGame } = actionSlice.actions
export default actionSlice.reducer
