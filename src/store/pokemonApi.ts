import { Pokemon } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
 

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  tagTypes: ['pokemonApi'],
  endpoints: (builder) => ({
    search: builder.query<Pokemon, string>({
      query: (q) => `search?name=${q}`,
      providesTags: (result, error, search) => [{type: 'pokemonApi', search}]
    }),
  }),
})

 