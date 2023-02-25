import React, { useState } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useStyles } from './styles'
import { searchMovies } from '../../features/currentGenreOrCategory'

const Search = () => {
    const [query, setQuery] = useState('')
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter key pressed')
            dispatch(searchMovies(query))
        }
    }
    return (
        <div className={classes.searchContainer}>
            <TextField
                onKeyDown={handleKeyPress}
                variant="standard" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                InputProps = {{
                    className: classes.input,
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon /> {query ? null : 'Search'}
                        </InputAdornment>
                    )
                }}
            />
        </div>
    )
}

export default Search