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
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

import card_img from "../../assets/images/card_img.png";

import {ModalFormulario} from "../ModalFormulario"
import BackendApi from "../../utils/axios/AxiosBackend";
import { useStyles } from "./Card.style";
import { useHistory } from "react-router-dom";

export const ProcessoCard = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const {processo}= props;
  const [openEditModal, setEditModal] = useState(false);
  
  const handleEditState = () => {
    setEditModal((prev) => !prev);
  };

  const handleDelete = () => {
    new BackendApi(localStorage.getItem("keycloak-token"))
      .removerProcessoPorId(processo) 
        .then((res => {console.log(res)}))
        .catch((error) => alert(error));
    history.push('/');
  }

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickAwayEvent = () => {
    setExpanded(false);
  };

  return (
    <>
    <ClickAwayListener onClickAway={handleClickAwayEvent}>
      <Card className={classes.root}>
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
                  onClick={handleDelete}
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
    <ModalFormulario
      key={processo.id}
      openModal={openEditModal}
      handleModalState={handleEditState}
      processo={processo}
    />
  </>
  );
};
