import { configureStore } from '@reduxjs/toolkit'
import actionSlice from './actionSlice/actionSlice'
import { apiBanner } from './apiBanner'
import { rawGame } from './rawGame'


export const store = configureStore({
  reducer: {
    action:actionSlice,
    [apiBanner.reducerPath]: apiBanner.reducer,
    [rawGame.reducerPath]: rawGame.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiBanner.middleware).concat(rawGame.middleware),
 
})
