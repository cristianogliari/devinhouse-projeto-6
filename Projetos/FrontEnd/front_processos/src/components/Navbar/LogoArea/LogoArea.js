import { Typography, Icon } from "@material-ui/core";

import rocketlaunch from "../../../assets/rocketlaunch.svg";

import { useStyles } from "./LogoArea.styles";

export function LogoArea() {
  const classes = useStyles();

  return (
    <div className={classes.divLogo}>
      <Icon className={classes.icone} style={{ marginRight: '10px', marginLeft: '10px' }}>
        <img src={rocketlaunch} alt="rocketlaunch" className={classes.img}/>
      </Icon>
      <Typography className={classes.logo}>DEVinHouse</Typography>
    </div>
  );
}
