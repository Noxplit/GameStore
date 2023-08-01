import { configureStore } from '@reduxjs/toolkit'
import actionSlice from './actionSlice/actionSlice'
import { rawGame } from './rawGame'
import favoriteSlice from './favoriteSlice/favoriteSlice'
import checkoutSlice from './checkoutSlice/checkoutSlice'
import loadingSlice from './loadingSlice/loadingSlice'


export const store = configureStore({
  reducer: {
    checkout:checkoutSlice,
    loading:loadingSlice,
    action:actionSlice,
    favorite:favoriteSlice,
    [rawGame.reducerPath]: rawGame.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rawGame.middleware)
 
})
