import { configureStore } from '@reduxjs/toolkit'
import actionSlice from './actionSlice/actionSlice'
import { rawGame } from './rawGame'
import favoriteSlice from './favoriteSlice/favoriteSlice'


export const store = configureStore({
  reducer: {
    action:actionSlice,
    favorite:favoriteSlice,
    [rawGame.reducerPath]: rawGame.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rawGame.middleware)
 
})
