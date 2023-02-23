import React from 'react'
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'

// Movie Object

/*
{
  adult: false
  backdrop_path: "/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg"
  genre_ids: (3) [28, 12, 14]
  id: 436969
  original_language: "en"
  original_title: "The Suicide Squad"
  overview: "Supervillains Harley Quinn, Bloodsport, ..."
  popularity: 3482.3242
  poster_path: "/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg"
  release_date: "2021-07-28"
  title: "The Suicide Squad"
  video: false
  vote_average: 4.2
  video_count: 3427
}
*/
const Movie = ({movie, i}) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie} >
            <Typography className={classes.title} variant='h5' >{movie.title}</Typography>
        </Grid>
    )
}

export default Movie