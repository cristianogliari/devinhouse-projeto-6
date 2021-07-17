import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    divLogo: {
        display: "flex",
        marginTop: theme.spacing(1)
    },

    logo: {
        color: "black"
    },

    icone: {
        height: '100%'
    },

    img: {
        textAlign: 'center',
        height: theme.spacing(3.5)
    }
}))