import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({
        // Get Movies by [Type]
        getMovies: builder.query({
            query: ({genreIdOrCategoryName, page}) => {
                // Get movies by category
                if (genreIdOrCategoryName && typeof(genreIdOrCategoryName) === 'string') {
                    return `/movie/${genreIdOrCategoryName.toLowerCase()}?page=${page ? page : 1}&api_key=${tmdbApiKey}`
                }

                // Get movies by genre
                else if (genreIdOrCategoryName && typeof(genreIdOrCategoryName) === 'number') {
                    return `/discover/movie?with_genres=${genreIdOrCategoryName}&page=${page ? page : 1}&api_key=${tmdbApiKey}`
                }
                // Get popular movies
                return `/movie/popular?page=1&api_key=${tmdbApiKey}`
            }
        }),
        //* Get Genres
        getGenres: builder.query({
            query: () => {
                return `/genre/movie/list?api_key=${tmdbApiKey}`
            }
        })
    })
})

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi