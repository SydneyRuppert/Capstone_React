import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Plant Owner's Name",
        family: "Plant's Family",
        genus: "Plant's Genus ",
        species: "Plant's Species",
        common_name: "Plant's Common Name",
        origin: "Plant's Origin",
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseFamily: (state, action) => { state.family = action.payload},
        chooseGenus: (state, action) => { state.genus = action.payload},
        chooseSpecies: (state, action) => { state.species = action.payload},
        chooseCommon: (state, action) => { state.common_name = action.payload},
        chooseOrigin: (state, action) => { state.origin = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseFamily, chooseGenus, chooseSpecies, chooseCommon, chooseOrigin} = rootSlice.actions