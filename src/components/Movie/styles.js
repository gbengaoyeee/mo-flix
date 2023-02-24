import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    movie: {
        padding: '10px',
    },
    title: {
        color: theme.palette.text.primary,
        textOverflow: 'ellipsis',
        width: '230px',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: 0,
        textAlign: 'center',
    },
    links: {
        textDecoration: 'none',
        alignItems: 'center',
        fontWeight: 'bold',
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
        },
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'none',
        }
    },
    image: {
        borderRadius: '10px',
        height: '500px',
        marginBottom: '10px',
        '&:hover': {
            transform: 'scale(1.02)',
        },
        [theme.breakpoints.down('sm')]: {
            height: '300px',
        }
    }
}))