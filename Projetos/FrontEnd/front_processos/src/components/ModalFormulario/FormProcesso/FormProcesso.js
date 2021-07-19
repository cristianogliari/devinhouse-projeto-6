import { Typography, TextField, Button, Paper } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

import { useStyle } from "./FormProcesso.styles";

const validacaoSchema = yup.object({
  nomeInteressado: yup
    .string("Digite seu nome")
    .strict()
    .trim("Remova os espaços no inicio e fim!")
    .required("Interessado é obrigatorio!"),
  anoDoProcesso: yup
    .string("Digite um ano")
    .length(4, "Digite um ano valido!")
    .required("Ano é obrigatorio!"),
  descricaoProcesso: yup
    .string("Digite uma descrição")
    .strict()
    .trim("Remova os espaços no inicio e fim!")
    .required("Descrição é obrigatorio!"),
});

export function FormProcesso(props) {
  const { formType, processoDados, handleModal } = props;
  const classes = useStyle();
  const formik = useFormik({
    initialValues: {
      nomeInteressado: processoDados.interessado,
      anoDoProcesso: processoDados.ano,
      descricaoProcesso: processoDados.descricao,
    },
    validationSchema: validacaoSchema,
    onSubmit: (value) => {
      if (formType === "cadastro") {
        console.log({
          nomeInteressado: value.nomeInteressado,
          anoDoProcesso: value.anoDoProcesso,
          descricaoProcesso: value.descricaoProcesso,
        });
      } else {
        console.log({
          nomeInteressado: value.nomeInteressado,
          anoDoProcesso: value.anoDoProcesso,
          descricaoProcesso: value.descricaoProcesso,
        });
      }
      handleModal();
    },
  });
  return (
    <Paper className={classes.paperForm}>
      <Typography className={classes.titulo}>
        {formType === "cadastro" ? "Novo Processo" : "Editar Processo"}
      </Typography>
      <form onSubmit={formik.handleSubmit} className={classes.formulario}>
        <div className={classes.formLinha}>
          {formType === "cadastro" ? (
            <></>
          ) : (
            <TextField
              className={classes.maxWidthMargin}
              fullWidth
              disabled
              variant="outlined"
              id="Placeholder"
              name="Placeholder"
              label="Numero Processo"
            />
          )}
          <TextField
            className={classes.maxWidthMargin}
            fullWidth
            variant="outlined"
            id="nomeInteressado"
            name="nomeInteressado"
            label="Interessado"
            value={formik.values.nomeInteressado}
            onChange={formik.handleChange}
            error={
              formik.touched.nomeInteressado &&
              Boolean(formik.errors.nomeInteressado)
            }
            helperText={
              formik.touched.nomeInteressado && formik.errors.nomeInteressado
            }
          />
          <TextField
            className={classes.maxWidthMargin}
            fullWidth
            variant="outlined"
            id="Placeholder"
            name="Placeholder"
            label="Assunto"
          />
        </div>
        <div className={classes.formLinha}>
          <TextField
            className={classes.maxWidthMargin}
            fullWidth
            disabled={formType==="editar"}
            variant="outlined"
            id="anoDoProcesso"
            name="anoDoProcesso"
            label="Ano do Processo"
            value={formik.values.anoDoProcesso}
            onChange={formik.handleChange}
            error={
              formik.touched.anoDoProcesso &&
              Boolean(formik.errors.anoDoProcesso)
            }
            helperText={
              formik.touched.anoDoProcesso && formik.errors.anoDoProcesso
            }
          />
          <TextField
            className={classes.maxWidthMargin}
            fullWidth
            disabled={formType==="editar"}
            variant="outlined"
            id="Placeholder"
            name="Placeholder"
            label="Orgao"
          />
          {formType === "cadastro" ? 
            <></>
           : 
            <TextField
              className={classes.maxWidthMargin}
              fullWidth
              disabled
              variant="outlined"
              id="Placeholder"
              name="Placeholder"
              label="Chave Processo"
            />
          }
        </div>
        <TextField
          className={classes.descricaoMargin}
          fullWidth
          variant="outlined"
          id="descricaoProcesso"
          name="descricaoProcesso"
          label="Descricao"
          multiline
          rows={6}
          value={formik.values.descricaoProcesso}
          onChange={formik.handleChange}
          error={
            formik.touched.descricaoProcesso &&
            Boolean(formik.errors.descricaoProcesso)
          }
          helperText={
            formik.touched.descricaoProcesso && formik.errors.descricaoProcesso
          }
        />
        <div className={classes.botaoFim}>
          <Button
            className={classes.maxWidthMargin}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Salvar
          </Button>
        </div>
      </form>
    </Paper>
  );
}
