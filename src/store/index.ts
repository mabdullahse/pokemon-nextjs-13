import { configureStore } from '@reduxjs/toolkit'


import searchSlice from './searchSlice'
import { pokemonApi } from './pokemonApi'

export const store = configureStore({
  reducer: {
    search: searchSlice,
    pokemonApi: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch