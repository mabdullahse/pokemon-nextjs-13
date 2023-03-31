
import { store } from '@/store';
import { setStartupPokemon } from '@/store/searchSlice';


import styles from './page.module.css'
import SSRPokemonTable from '@/components/SSRPokemonTable';
import SearchPokemon from '@/components/SearchPokemon';
import StoreProvidor from '@/components/StoreProvidor';
import PreLoader from '@/components/PreLoader';



export default async function Home() {

    const response = await fetch('http://localhost:3000/api/search')
    const data = await response.json();

    store.dispatch(setStartupPokemon(data));

    return (
        <main className={styles.main}>

            <StoreProvidor> 
                <PreLoader pokemons={data}/>
                {/* for this client side component data is serialized form server to cliene
                    It then preload load the store with data when render
                */}
                <SearchPokemon />
            </StoreProvidor>
        </main>
    )
}
