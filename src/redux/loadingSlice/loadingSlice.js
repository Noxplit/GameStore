import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
	name: 'loadingSlice',
	initialState: {
    loading:{
      loadingGame: null,
      loadingGameList:null
    }
	},
	reducers: {
setLoadingGame: (state, {payload}) => {
  state.loading.loadingGame = payload
},
setLoadingGameList: (state, {payload}) => {
  state.loading.loadingGameList = payload
},
	},
})

export const {setLoadingGame, setLoadingGameList } = loadingSlice.actions
export default loadingSlice.reducer
