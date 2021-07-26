import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "50px",
    border: "1px solid #c6c6c6",
    borderRadius: "5px",
    boxShadow: "none",
    "&:last-child": {
      paddingBottom: '0px',
    },
  },
  title: {
    marginTop: "10px",
    fontWeight: "600",
    fontSize: "0.8rem",
  },
  subtitle: {
    fontSize: "0.9rem",
  },
  text: {
    fontSize: "0.9rem",

    textAlign: "justify",
  },
  main: {
    padding: "0px 0px 5px 0px",
  },
  gridCardStyle: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  gridTypoSize: {
    display: "flex",
    width: "100%",
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  gridIconSize: {
    display: "flex",
    marginTop: "6px",
    marginLeft: "auto",
    marginRight: "6px",
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  mainImage: {
    width: "90px",
    height: "90px",
    marginTop: "10px",
    marginLeft: "10px",
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
  iconStyle: {
    display: "flex",
    justifyContent: "end",
  },
  moreInfo: {
    paddingBottom: 0,
    "&:last-child": {
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: "5px",
      marginBottom: "5px",
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.standard,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
