import { api } from './api'
import { 
    CHARACTER, 
    CHARACTERS, 
    EPISODE 
} from './constants'

export type TInfo = {
    count: number,
    pages: number,
    next: string,
    prev: unknown | null
}

interface IResponseListCharacters {
    info: TInfo
    results:TCharacter[]
}

interface IResponseListEpisodes {
    info:TInfo
    results:TEpisode[]
}


export const rickMortyApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllCharacters: builder.query<IResponseListCharacters, number>({
            query: (page) => `${CHARACTERS}/?page=${page}`,
        }),
        getCharacterById: builder.query<TCharacter, number>({
            query: (id) => `${CHARACTER}/${id}`,
        }),
        getAllEpisodes: builder.query<IResponseListEpisodes, number>({
            query: (page) => `${EPISODE}/?page=${page}`,
        }),
        getEpisodeById: builder.query<TEpisode, number>({
            query: (id) => `${EPISODE}/${id}`,
        })
    })
})

export const { 
    useGetAllCharactersQuery, 
    useGetAllEpisodesQuery, 
    useGetCharacterByIdQuery, 
    useGetEpisodeByIdQuery,
    useLazyGetAllCharactersQuery,
    useLazyGetAllEpisodesQuery 
} = rickMortyApi