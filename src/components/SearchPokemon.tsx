'use client';

import { AppDispatch, RootState } from '@/store';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setSearch, setStartupPokemon } from '@/store/searchSlice';
import PokemonTable from './PokemonTable';
import { useEffect } from 'react';
import { Pokemon } from '@/types';
import { pokemonApi } from '@/store/pokemonApi';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


const SearchPokemon = () => {
    const dispatch = useAppDispatch()
    const search = useAppSelector((state: RootState) => state.search.search)
    const startupPokemon = useSelector((state: RootState) => state.search.startupPokemon);
    const data = useAppSelector((state) => state.pokemonApi.queries[`search("${search}")`]?.data as Pokemon[])

    useEffect(() => {

        dispatch(pokemonApi.endpoints.search.initiate(search))
    }, [search])
    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => { dispatch(setSearch(e.target.value)); }} />
            <br />

            <PokemonTable pokemons={search.length ? data ?? [] : startupPokemon} />
        </div>
    );
};

export default SearchPokemon;