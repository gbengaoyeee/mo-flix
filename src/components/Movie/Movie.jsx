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

    const calculateTimeout = () => {
        return (parseInt(i)+1) * 300
    }
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie} >
            <Grow in key={i} timeout={calculateTimeout()}>
                <Link className={classes.links} to={`/movie/${movie.id}`}>
                    {
                        movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className={classes.image}/>
                        : <img src="https://www.fillmurray.com/200/300" alt={movie.title} className={classes.image} />
                    }
                    <Typography className={classes.title} variant='h5' >{movie.title}</Typography>
                    <Tooltip disableTouchListener title={`${parseFloat(movie.vote_average/2)}/5`} placement='bottom'>
                        <div>
                            <Rating value={movie.vote_average/2} readOnly precision={0.1} />
                        </div>
                    </Tooltip>
                </Link>
            </Grow>
        </Grid>
    )
}

export default Movie