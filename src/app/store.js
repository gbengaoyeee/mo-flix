import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/tmdb";

export default configureStore({
    reducer: {
        // Add your reducers here
        [tmdbApi.reducerPath]: tmdbApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(tmdbApi.middleware)
    }
})