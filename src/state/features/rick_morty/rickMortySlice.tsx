import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TInfo } from "../../../services/rick_morty";

type TRickMortyState = {
    characters: TCharacter[]
    infoCharacters: TInfo | undefined
    episodes: TEpisode[]
    infoEpidoses: TInfo | undefined
    filteredCharacter: TCharacter | undefined
    filteredEpisode: TEpisode | undefined
}

const INITIAL_STATE: TRickMortyState = {
    characters: [],
    episodes: [],
    filteredCharacter: undefined,
    filteredEpisode: undefined,
    infoCharacters: undefined,
    infoEpidoses: undefined
}

const slice = createSlice({
    name: 'rick_morty',
    initialState: INITIAL_STATE,
    reducers: {
        setCharacters: (state, { payload: { results }, }: PayloadAction<{ results: TCharacter[] }>,
        ) => {
            state.characters = [...state.characters, ...results]
        },

        setInfoCharacters(state, action: PayloadAction<TInfo>) {
            state.infoCharacters = action.payload
        },

        setEpisodes: (state, { payload: { results }, }: PayloadAction<{ results: TEpisode[] }>,
        ) => {
            state.episodes = [...state.episodes, ...results]
        },
        setInfoEpisodes(state, action: PayloadAction<TInfo>) {
            state.infoEpidoses = action.payload
        },
    },
})

export const {
    setCharacters,
    setEpisodes,
    setInfoCharacters,
    setInfoEpisodes
} = slice.actions

export default slice.reducer

export const selectRickMorty = (state: RootState) => state.rick_morty
