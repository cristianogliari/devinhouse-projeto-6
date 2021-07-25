import { useState } from "react";

import {
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CardActions,
  Collapse,
  IconButton,
  Card,
  ClickAwayListener,
  Button,
} from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

import card_img from "../../assets/images/card_img.png";

import {ModalFormulario} from "../ModalFormulario"
import BackendApi from "../../utils/axios/AxiosBackend";
import { useStyles } from "./Card.styles";
import { useHistory } from "react-router-dom";
import { useDataContext } from "../../utils/context/DataContext";

import { toastSuccess, toastError } from "../../utils/alert/toast";

export const ProcessoCard = (props) => {
  const { key, processo }= props;
  const { recarregarProcessos } = useDataContext();
  
  const classes = useStyles();
  const history = useHistory();

  const [openDialog, setOpenDialog] = useState(false);
  const [openEditModal, setEditModal] = useState(false);
  
  const handleEditState = () => {
    setEditModal((prev) => !prev);
  };

  const handleDelete = () => {
    new BackendApi(localStorage.getItem("keycloak-token"))
      .removerProcessoPorId(processo) 
        .then(toastSuccess('Processo removido com sucesso'))
        .catch((res) => toastError(res.response.data.message));
    handleClickDialog();
    recarregarProcessos();
    history.push("/");
  }

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickAwayEvent = () => {
    setExpanded(false);
  };

  const handleClickDialog = () => {
    setOpenDialog(!openDialog);
  }

  return (
    <>
    <ClickAwayListener onClickAway={handleClickAwayEvent}>
      <Card className={classes.root} key={key}>
        <CardContent className={classes.main}>
          <Grid container spacing={0}>
            <Grid item xs={2}>
              <CardContent className={classes.mainImage}>
                <CardMedia
                  className={classes.image}
                  image={card_img}
                  title="Processo logo"
                />
              </CardContent>
            </Grid>
            <Grid item xs={8}>
              <CardContent
                className={classes.gridTypoSize}
                style={{ marginLeft: "10px" }}
              >
                <Grid container spacing={0}>
                  <Grid item xs={4} className={classes.gridCardStyle}>
                    <CardContent className={classes.gridTypoSize}>
                      <Typography className={classes.title}>
                        Processo
                      </Typography>
                    </CardContent>
                    <CardContent className={classes.gridTypoSize}>
                      <Typography className={classes.subtitle}>
                        {processo.chaveprocesso}
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={3}>
                    <CardContent
                      className={classes.gridTypoSize}
                      style={{ marginLeft: "10px" }}
                    >
                      <Typography className={classes.title}>Ano</Typography>
                    </CardContent>
                    <CardContent
                      className={classes.gridTypoSize}
                      style={{ marginLeft: "10px" }}
                    >
                      <Typography className={classes.subtitle}>
                      {processo.nuano}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent
                className={classes.gridTypoSize}
                style={{ marginLeft: "10px" }}
              >
                <Typography className={classes.title}>Assunto</Typography>
              </CardContent>
              <CardContent
                className={classes.gridTypoSize}
                style={{ marginLeft: "10px" }}
              >
                <Typography className={classes.subtitle}>
                {processo.cdassunto.descricao}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={2}>
              <CardContent className={classes.gridTypoSize}>
                <CardContent className={classes.gridIconSize}>
                  <IconButton 
                  aria-label="editar" 
                  style={{ padding: "2px" }}
                  onClick={handleEditState}
                  >
                    <CreateIcon
                      fontSize="small"
                      style={{ padding: "0" }}
                    />
                  </IconButton>

                  <IconButton 
                  aria-label="deletar" 
                  style={{ padding: "2px" }}
                  onClick={handleClickDialog}
                  >
                    <DeleteIcon
                      fontSize="small"
                      style={{ padding: "0" }}
                    />
                  </IconButton>

                  <CardActions disableSpacing style={{ padding: "2px" }}>
                    <IconButton
                      className={
                        (classes.expand,
                        {
                          [classes.expandOpen]: expanded,
                        })
                      }
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      fontSize="small"
                      style={{ padding: "0" }}
                      aria-label="mostrar mais informações"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                </CardContent>
              </CardContent>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent className={classes.moreInfo}>
          <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
            style={{ borderTop: "1px solid #c6c6c675" }}
          >
            <CardContent className={classes.moreInfo}>
              <Grid container spaceing={0}>
                <Grid item xs={3}>
                  <CardContent className={classes.gridTypoSize}>
                    <Typography className={classes.title}>
                      Interessado
                    </Typography>
                  </CardContent>
                  <CardContent className={classes.gridTypoSize}>
                    <Typography className={classes.subtitle}>
                    {processo.cdinteressado.nminteressado}
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={9}>
                  <CardContent className={classes.gridTypoSize}>
                    <Typography className={classes.title}>Descrição</Typography>
                  </CardContent>
                  <CardContent className={classes.gridTypoSize}>
                    <Typography className={classes.text}>
                    {processo.descricao}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </CardContent>
          </Collapse>
        </CardContent>
      </Card>
    </ClickAwayListener>

    <Dialog
      open={openDialog}
      onClose={handleClickDialog}
      aria-labelledby="responsive-dialog-title" >

        <DialogTitle id="responsive-dialog-title">
          {"Deseja realmente excluir o processo?"}
        </DialogTitle>

      <DialogActions>
        <Button autoFocus onClick={handleClickDialog} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleDelete} color="primary" autoFocus>
          Confirmar
        </Button>

      </DialogActions>
    </Dialog>

    <ModalFormulario
      key={processo.id}
      openModal={openEditModal}
      handleModalState={handleEditState}
      processo={processo} />
  </>
  );
};
