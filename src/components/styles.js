import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        height: "100vh",
    },
    toolbar: {
        height: '70px',
    },
    content: {
        flexGrow: '1',
        padding: '2em',
    },
}));