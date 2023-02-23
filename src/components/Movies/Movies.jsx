import React, {useState, useEffect} from 'react'
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material'
import { useGetMoviesQuery } from '../../services/tmdb'
import { useSelector } from 'react-redux'
import {MovieList} from '../'


const Movies = () => {
  const { data, error, isLoading, isFetching } = useGetMoviesQuery()
  if(isFetching) {
    return (
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <CircularProgress size='4rem'/>
      </Box>
    )
  }
  if(!data.results.length) {
    return (
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Typography variant='h4' >
          No movies found <br/> Search for something else
        </Typography>
      </Box>
    )
  }
  if (error) return <div>Something went wrong: {error.message}</div>
  return (
    <div>
      <MovieList movies={data} />
    </div>
  )
}

export default Movies