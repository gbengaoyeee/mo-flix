import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/tmdb";
import { genreOrCategory } from "../features/currentGenreOrCategory";

export default configureStore({
    reducer: {
        // Add your reducers here
        [tmdbApi.reducerPath]: tmdbApi.reducer,
        currentGenreOrCategory: genreOrCategory.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(tmdbApi.middleware)
    }
})