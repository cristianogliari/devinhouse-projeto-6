import { Typography, Icon } from "@material-ui/core";

import rocketlaunch from "../../../assets/rocketlaunch.svg";

import { useStyles } from "./LogoArea.styles";

export function LogoArea() {
  const classes = useStyles();

  return (
    <div className={classes.divLogo}>
      <Typography className={classes.logo}>DEVinHouse</Typography>
      <Icon className={classes.icone}>
        <img src={rocketlaunch} alt="rocketlaunch" className={classes.img}/>
      </Icon>
    </div>
  );
}
