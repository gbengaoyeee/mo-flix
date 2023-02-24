import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
    name: "genreOrCategory",
    initialState: {
        genreOrCategory: '',
        page: 1,
        searchQuery: '',
    },
    reducers: {
        selectGenreOrCategory: (state, action) => {
            // state.genreOrCategory = action.payload
            console.log(action.payload)
        }
    }
})

export const { selectGenreOrCategory } = genreOrCategory.actions
export default genreOrCategory.reducer