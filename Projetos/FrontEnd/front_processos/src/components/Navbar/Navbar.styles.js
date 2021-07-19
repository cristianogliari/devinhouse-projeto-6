import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    navBar: {
        marginBottom: theme.spacing(5)
    },

    toolBarOff: {
        display: "flex",
        justifyContent: "space-between"
    },

    toolBarLogado: {
        display: "flex",
        justifyContent: "space-between"
    },

    divSearchBar: {
        width:"62%",
        marginLeft: "auto",
        marginRight: "1%"
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