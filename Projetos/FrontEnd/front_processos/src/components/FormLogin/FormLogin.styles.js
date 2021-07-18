import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  paperForm: {
    width: '100%',
    height: '100%',
    maxWidth: 500,
    maxHeight: 500,
    margin: "auto",
    marginTop: "5%",
  },
  titulo: {
    fontWeight:"bold",
    margin: 10,
    padding: 10,
  },
  formulario: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    margin: 10,
    maxWidth: 950,
    padding: 10,
  },
  textFieldStyles: {
    marginTop: 0,
    margin: 10,
    maxWidth: 400,
  },
  maxWidthMargin: {
    margin: 10,
    maxWidth: 200,
  },
  cadastrar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop:20,
  },
}));
