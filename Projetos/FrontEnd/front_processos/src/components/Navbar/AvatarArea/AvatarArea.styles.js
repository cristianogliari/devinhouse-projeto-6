import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    brigthIcon: {
        width: theme.spacing(3.5),
        height: theme.spacing(3.5),
    },
    button: {
        marginLeft: theme.spacing(1)
    },

    avatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: theme.spacing(2),
    },
}))