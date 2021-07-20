import { Typography, Icon, Box } from "@material-ui/core";

import rocketlaunch from "../../../assets/rocketlaunch.svg";
import rocketlaunchwhite from "../../../assets/rocketlaunchwhite.svg";

import { useCustomTheme } from "../../../utils/context/themeContext";

import { useStyles } from "./LogoArea.styles";

export function LogoArea() {
  
  const classes = useStyles();

  const { darkMode } = useCustomTheme();

  return (
    <Box className={classes.divLogo} style={darkMode ? {color: "white"} : {color: "black"}}>
      <Icon
        className={classes.icone}
        style={{ marginRight: "10px", marginLeft: "10px" }}
      >
        {darkMode === false ? (
          <img src={rocketlaunch} alt="rocketlaunch" className={classes.img} />
          ) : (
            <img
            src={rocketlaunchwhite}
            alt="rocketlaunch"
            className={classes.img}
          />
        )}
      </Icon>
      <Typography>DEVinHouse</Typography>
    </Box>
  );
}
