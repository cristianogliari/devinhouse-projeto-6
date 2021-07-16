import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  profileCard: {
    borderRadius: "1",
    width: "20%",
    backgroundColor: "black"
  },

  divAvatar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },

  divider: {
    marginTop: theme.spacing(5)
  },

  divButton: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));
