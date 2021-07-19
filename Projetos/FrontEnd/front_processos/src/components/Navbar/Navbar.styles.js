import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    toolBarOff: {
        display: "flex",
        justifyContent: "space-between"
    },

    toolBarLogado: {
        display: "flex",
        justifyContent: "space-between"
    },

    divSearchBar: {
        width:"51%",
        marginLeft: "auto",
    },

    divProfile: {
        width: "100vw",
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: theme.spacing(2),
    },

    divAvatarArea: {
        display: "flex"
    }
}))