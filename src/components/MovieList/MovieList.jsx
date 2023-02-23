import React from 'react'
import { Grid } from '@mui/material'
import { useStyles } from './styles'
import { Movie } from '../'

const MovieList = ({movies}) => {
    const classes = useStyles()
    return (
        <Grid className={classes.moviesContainer}>
            {
                movies.results.map((movie) => (
                    <Movie key={movie.id} movie={movie} i={movie.id}/>
                ))
            }
        </Grid>
    )
}

export default MovieList