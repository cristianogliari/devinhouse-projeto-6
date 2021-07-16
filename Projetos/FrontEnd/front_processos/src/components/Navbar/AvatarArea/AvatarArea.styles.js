import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    brigthIcon: {
        transform: "rotateZ(180deg)",
        width: theme.spacing(3.5),
        height: theme.spacing(3.5),
    },
    button: {
        marginLeft: theme.spacing(7)
    },

    avatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: theme.spacing(2),
    },
}))