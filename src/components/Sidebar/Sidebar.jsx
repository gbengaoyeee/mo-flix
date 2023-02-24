import React, {useEffect} from 'react'
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, ListItemButton } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/styles'
import { useStyles } from './styles'
import { useGetGenresQuery } from '../../services/tmdb'
import genreIcons from '../../assets/genres'
import { useDispatch, useSelector } from 'react-redux'
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory'

const blueLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

const redLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const categories = [
    {label: 'Popular', value: 'popular'},
    {label: 'Top Rated', value: 'top_rated'},
    {label: 'Upcoming', value: 'upcoming'},
]

const Sidebar = ({setMobileOpen}) => {
    const theme = useTheme()
    const classes = useStyles()
    const { data, isFetching, error } = useGetGenresQuery()
    const dispatch = useDispatch()
    const  { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory)

    console.log(genreIdOrCategoryName)

    return (
        <>
            <Link to='/' className={classes.imageLink}>
                <img src={theme.palette.mode === 'light' ? blueLogo : redLogo } alt="moflix-logo" className={classes.image} />
            </Link>
            <Divider/>
            <List>
                <ListSubheader>Category</ListSubheader>
                {
                    categories.map(({label, value}) => (
                        <Link to={`/movies/${value}`} key={value} className={classes.links}>
                            <ListItemButton onClick={() => dispatch(selectGenreOrCategory(value))}>
                                <ListItemIcon>
                                    <img src={genreIcons[label.toLowerCase()]} className={classes.genreImages} height={30} alt="" />
                                </ListItemIcon>
                                <ListItemText primary={label} />
                            </ListItemButton>
                        </Link>
                    ))
                }
            </List>
            <Divider/>
            <List>
                <ListSubheader>Genre</ListSubheader>
                { isFetching ? (
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <CircularProgress />
                    </Box>
                ) :
                    data.genres.map(({name, id}) => (
                        <Link to={`/movies/${name.toLowerCase()}`} key={name} className={classes.links}>
                            <ListItemButton onClick={() => dispatch(selectGenreOrCategory(id))}>
                                <ListItemIcon>
                                    <img src={genreIcons[name.toLowerCase()]} className={classes.genreImages} height={30} alt="" />
                                </ListItemIcon>
                                <ListItemText primary={name} />
                            </ListItemButton>
                        </Link>
                    ))
                }
            </List>
        </>
    )
}

export default Sidebar