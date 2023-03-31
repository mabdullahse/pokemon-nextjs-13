import { Pokemon } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchState {
    search: string,
    startupPokemon: Pokemon[]
}

const initialState: SearchState = {
    search: '',
    startupPokemon: []
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setStartupPokemon: (state, action: PayloadAction<Pokemon[]>) => {
            state.startupPokemon = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setSearch, setStartupPokemon } = searchSlice.actions

export default searchSlice.reducer