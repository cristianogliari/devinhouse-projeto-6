import {
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { useStyle } from "./FormLogin.styles";

const validacaoSchema = yup.object({
  username: yup
    .string("Digite seu nome de usuario")
    .strict()
    .trim("Remova os espaços no inicio e fim!")
    .required("Nome do usuario é obrigatorio!"),
  password: yup
    .string("Digite sua senha.")
    .min(4, "Senha digita é muito pequena.")
    .max(10, "Senha digita é maior que o valido.")
    .required("Senha é obrigatorio!"),
});

export function FormLogin() {
  const [showPassword, setshowPassword] = useState(true);

  const handleShowPassword = () => {
    setshowPassword((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validacaoSchema,
    onSubmit: (value) => {
      console.log({
        username: value.username,
        password: value.password,
      });
    },
  });
  const classes = useStyle();
  return (
    <Paper elevation= {3} className={classes.paperForm}>
      <Typography className={classes.titulo}>
        Bem-vindo, efetue seu Login.
      </Typography>
      <form onSubmit={formik.handleSubmit} className={classes.formulario}>
        <TextField
          className={classes.textFieldStyles}
          fullWidth
          id="username"
          name="username"
          label="Usuario"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          className={classes.textFieldStyles}
          fullWidth
          id="password"
          name="password"
          type={showPassword ? "password" : "text"}
          label="Senha"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                  </InputAdornment>
                 )
          }}
        />
        <div className={classes.cadastrar}>
          <Button
            className={classes.maxWidthMargin}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </Paper>
  );
}
