import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  paperForm: {
    width: '100vw',
    height: '100vh',
    maxWidth: 450,
    maxWidth: 1000,
    maxHeight: 520,
    minHeight: 520,
  },
  titulo: {
    fontWeight:"fontWeightBold",
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
