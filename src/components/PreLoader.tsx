'use client';

import { store } from '@/store';
import { setStartupPokemon } from '@/store/searchSlice';
import { Pokemon } from '@/types';
import { useRef } from 'react';



const PreLoader = ({ pokemons }: { pokemons: Pokemon[] }) => {
    const data = useRef(false);
console.log('called');

    if (!data.current) {
        store.dispatch(setStartupPokemon(pokemons));
        data.current = true;
    }
    return null
};

export default PreLoader;