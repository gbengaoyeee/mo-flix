import React, {useState, useEffect} from 'react'
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material'
import { useGetMoviesQuery } from '../../services/tmdb'
import { useSelector } from 'react-redux'

const Movies = () => {
  const { data, error, isLoading } = useGetMoviesQuery()
  return (
    <div>Movies</div>
  )
}

export default Movies