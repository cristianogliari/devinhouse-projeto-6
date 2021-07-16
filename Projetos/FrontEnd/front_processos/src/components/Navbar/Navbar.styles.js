import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    toolBar: {
        display: "flex",
        justifyContent: "space-between"
    },

    divSearchBar: {
        width:"50%",
    },

    divProfile: {
        width: "100vw",
        display: "flex",
        justifyContent: "flex-end",
        padding: theme.spacing(0.5),
        paddingRight: theme.spacing(2),
    },

    divAvatarArea: {
        display: "flex"
    }
}))