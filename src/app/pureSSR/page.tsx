
import { store } from '@/store';
import { setStartupPokemon } from '@/store/searchSlice';


import styles from './page.module.css'
import SSRPokemonTable from '@/components/SSRPokemonTable';



export default async function Home() {

  const response = await fetch('http://localhost:3000/api/search')
  const data = await response.json();

  store.dispatch(setStartupPokemon(data));

  return (
    <main className={styles.main}>
     

    <SSRPokemonTable />
    </main>
  )
}
