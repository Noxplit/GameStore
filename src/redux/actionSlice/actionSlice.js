import { createSlice } from '@reduxjs/toolkit'

export const actionSlice = createSlice({
	name: 'action',
	initialState: {
		id: 1,
		singleGame: null,
    search:null,
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
    setSearchGame: (state, { payload }) => {
    state.search = payload
    }
	},
})

export const { setOpenMenu, getId, setSingleGame,setSearchGame } = actionSlice.actions
export default actionSlice.reducer
