import { CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import { useStyles } from "./Card.style";
import card_img from '../../assets/images/card_img.png';

export const ProcessoCard = () => {
  const classes = useStyles();

  const handleOpen = () => {
    return null;
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.main}>
        <Grid container spacing={0}>
          <Grid item xs={2} className={classes.gridCardStyle} >
            <CardContent className={classes.mainImage}>
              <CardMedia 
                className={classes.image}
                image={card_img}
                title='Processo logo' />
            </CardContent>
          </Grid>
          <Grid item xs={8}>
            <CardContent>
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
                <Grid item xs={3} className={classes.gridCardStyle} >
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
            <CardContent>
              <h5>teste</h5>
            </CardContent>
          </Grid>
          <Grid item xs={2}>
            <CardContent className={classes.iconStyle}>
              <CreateIcon fontSize='small' />
              <DeleteIcon fontSize='small' />
            </CardContent>
          </Grid>          
        </Grid>      
      </CardContent>
      <CardContent className={classes.moreInfo}>

      </CardContent>
    </Card>
  )
}