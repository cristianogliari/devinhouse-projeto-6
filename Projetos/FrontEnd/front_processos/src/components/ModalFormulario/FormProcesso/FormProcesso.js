import { Typography, TextField, Button, Paper, MenuItem } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

import { useDataContext } from "../../../utils/context/DataContext";
import { useStyle } from "./FormProcesso.styles";

const validacaoSchema = yup.object({
  anoDoProcesso: yup
    .string("Digite um ano")
    .length(4, "Digite um ano valido!")
    .required("Ano é obrigatorio!"),
  descricaoProcesso: yup
    .string("Digite uma descrição")
    .strict()
    .trim("Remova os espaços no inicio e fim!")
    .required("Descrição é obrigatorio!"),
  orgaoSetor: yup
    .string("Digite um Orgão")
    .strict()
    .trim("Remova os espaços no inicio e fim!")
    .length(4, "Digite 4 caracteres para o Orgão!")
    .required("Orgão é obrigatorio!"),
  codigoInteressado: yup
    .number("Escolha uma opção!")
    .moreThan(0, "Escolha uma opção!")
    .required("Interessado é obrigatorio!"),
  codigoAssunto: yup
    .number("Escolha uma opção!")
    .moreThan(0, "Escolha uma opção!")
    .required("Assunto é obrigatorio!"),
});

export function FormProcesso(props) {
  const { formType, processoDados, handleModal } = props;
  const { data: {listaAssunto, listaInteressado}} = useDataContext();
  const classes = useStyle();
  const formik = useFormik({
    initialValues: {
      anoDoProcesso: processoDados.nuano,
      descricaoProcesso: processoDados.descricao,
      orgaoSetor: processoDados.sgorgaosetor,
      numeroProcesso: processoDados.nuprocesso,
      chaveDeProcesso: processoDados.chaveprocesso,
      codigoInteressado: processoDados.cdinteressado.id,
      codigoAssunto: processoDados.cdassunto.id,
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
              className={classes.widthMargin}
              fullWidth
              disabled
              variant="outlined"
              id="numeroProcesso"
              name="numeroProcesso"
              label="Numero Processo"
              value={formik.values.numeroProcesso}
            />
          )}
          <TextField
            className={classes.widthMargin}
            fullWidth
            select
            variant="outlined"
            id="codigoInteressado"
            name="codigoInteressado"
            label="Interessado"
            value={formik.values.codigoInteressado}
            onChange={formik.handleChange}
            error={
              formik.touched.codigoInteressado &&
              Boolean(formik.errors.codigoInteressado)
            }
            helperText={
              formik.touched.codigoInteressado &&
              formik.errors.codigoInteressado
            }
          >
            <MenuItem key={0} value={0}>
              Selecione
            </MenuItem>
            {
              listaAssunto.map((interessado) => (
                <MenuItem key={interessado.id} value={interessado.id}>
                  {interessado.descricao}
                </MenuItem>
              ))
            }
          </TextField>
          <TextField
            className={classes.widthMargin}
            fullWidth
            select
            variant="outlined"
            id="codigoAssunto"
            name="codigoAssunto"
            label="Assunto"
            value={formik.values.codigoAssunto}
            onChange={formik.handleChange}
            error={
              formik.touched.codigoAssunto &&
              Boolean(formik.errors.codigoAssunto)
            }
            helperText={
              formik.touched.codigoAssunto && formik.errors.codigoAssunto
            }
          >
            <MenuItem key={0} value={0}>
              Selecione
            </MenuItem>
            {
              listaAssunto.map((assunto) => (
                <MenuItem key={assunto.id} value={assunto.id}>
                  {assunto.descricao}
                </MenuItem>
              ))
            }
          </TextField>
        </div>
        <div className={classes.formLinha}>
          <TextField
            className={classes.widthMargin}
            fullWidth
            disabled={formType === "editar"}
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
            className={classes.widthMargin}
            fullWidth
            disabled={formType === "editar"}
            variant="outlined"
            id="orgaoSetor"
            name="orgaoSetor"
            label="Orgao"
            value={formik.values.orgaoSetor}
            onChange={formik.handleChange}
            error={
              formik.touched.orgaoSetor && Boolean(formik.errors.orgaoSetor)
            }
            helperText={formik.touched.orgaoSetor && formik.errors.orgaoSetor}
          />
          {formType === "cadastro" ? (
            <></>
          ) : (
            <TextField
              className={classes.widthMargin}
              fullWidth
              disabled
              variant="outlined"
              id="chaveDeProcesso"
              name="chaveDeProcesso"
              label="Chave Processo"
            />
          )}
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
            className={classes.widthMargin}
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
