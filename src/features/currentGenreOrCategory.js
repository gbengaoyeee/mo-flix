import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
    name: "genreOrCategory",
    initialState: {
        genreIdOrCategoryName: '',
        page: 1,
        searchQuery: '',
    },
    reducers: {
        selectGenreOrCategory: (state, action) => {
            state.genreIdOrCategoryName = action.payload
            state.searchQuery = ''
        },
        searchMovies: (state, action) => {
            state.searchQuery = action.payload
            console.log(state.searchQuery)
        }
    }
})

export const { selectGenreOrCategory, searchMovies } = genreOrCategory.actions
export default genreOrCategory.reducer