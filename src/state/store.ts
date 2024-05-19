import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import rickMortyReducer from './features/rick_morty/rickMortySlice'
import { rickMortyApi } from '../services/rick_morty'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    rick_morty: rickMortyReducer,
    [rickMortyApi.reducerPath]: rickMortyApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickMortyApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch