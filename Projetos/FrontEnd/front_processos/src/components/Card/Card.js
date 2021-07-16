import { CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import { useStyles } from "./Card.style";
import card_img from '../../assets/images/card_img.png';
import { useState } from 'react';

export const ProcessoCard = () => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.main}>
        <Grid container spacing={0}>
          <Grid item xs={2} >
            <CardContent className={classes.mainImage}>
              <CardMedia 
                className={classes.image}
                image={card_img}
                title='Processo logo' />
            </CardContent>
          </Grid>
          <Grid item xs={8}>
            <CardContent className={classes.gridTypoSize}>
              <Grid container spacing={0}>
                <Grid item xs={4} className={classes.gridCardStyle} >
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
                  <CardContent className={classes.gridTypoSize}>
                    <Typography className={classes.title}>
                      Data
                    </Typography>
                  </CardContent>
                  <CardContent className={classes.gridTypoSize}>
                    <Typography className={classes.subtitle}>
                      07/08/2018
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </CardContent>
            <CardContent className={classes.gridTypoSize}>
              <Typography className={classes.title}>
                Assunto
              </Typography>
            </CardContent>
            <CardContent className={classes.gridTypoSize}>
              <Typography className={classes.subtitle}>
                Corte de Árvores Frutíferas
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={2}>
            <CardContent className={classes.gridTypoSize}>
              <CardContent className={classes.gridIconSize}>
                <CreateIcon fontSize='small' style={{ color: '#666666' }} />
                <DeleteIcon fontSize='small' style={{ color: '#666666' }} />
                <CardActions disableSpacing style={{ padding: '0' }}>
                  <IconButton
                    className={classes.expand, {
                      [classes.expandOpen]: expanded,
                    }}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    fontSize='small'
                    style={{ padding: '0' }}
                    aria-label="show more" >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
              </CardContent>
            </CardContent>
          </Grid>          
        </Grid>      
      </CardContent>
      <CardContent className={classes.moreInfo}>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
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
                  <Typography className={classes.title}>
                    Descrição
                  </Typography>
                </CardContent>
                <CardContent className={classes.gridTypoSize}>
                  <Typography className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  )
}