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

import { useStyles } from "./Card.style";

export const ProcessoCard = (props) => {
  const classes = useStyles();
  const {processo}= props;
  const [openEditModal, setEditModal] = useState(false);
  
  const handleEditState = () => {
    setOpenModal((prev) => !prev);
  };

  const {handleEdit, handleDelete}

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
                        SOFT 1/2018
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={3}>
                    <CardContent
                      className={classes.gridTypoSize}
                      style={{ marginLeft: "10px" }}
                    >
                      <Typography className={classes.title}>Data</Typography>
                    </CardContent>
                    <CardContent
                      className={classes.gridTypoSize}
                      style={{ marginLeft: "10px" }}
                    >
                      <Typography className={classes.subtitle}>
                        07/08/2018
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
                  Corte de Árvores Frutíferas
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={2}>
              <CardContent className={classes.gridTypoSize}>
                <CardContent className={classes.gridIconSize}>
                  <IconButton 
                  aria-label="editar" 
                  style={{ padding: "2px" }}
                  onClick={handleEdit}
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
                      Zé da Esquina
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={9}>
                  <CardContent className={classes.gridTypoSize}>
                    <Typography className={classes.title}>Descrição</Typography>
                  </CardContent>
                  <CardContent className={classes.gridTypoSize}>
                    <Typography className={classes.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
    openModal={openEditModal}
    handleModalState={handleEditState}
    processoDados={processo}
  />
  </>
  );
};
