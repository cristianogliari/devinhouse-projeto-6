import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  paperForm: {
    width: '100%',
    height: '100%',
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
  formLinha: {
    display: 'flex',
    flexDirection: 'row',
  },
  botaoFim: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
  descricaoMargin: {
    margin: 10,
  },
  maxWidthMargin: {
    margin: 10,
    maxWidth: 300,
  },
}));
