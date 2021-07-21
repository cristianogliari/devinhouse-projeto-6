import { IconButton, Avatar, Button } from "@material-ui/core";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useCustomTheme } from "../../../utils/context/themeContext";

import { useStyles } from "./AvatarArea.styles";

export function AvatarArea(props) {
  const classes = useStyles();
  const { changeTheme } = useCustomTheme();
  const { handleChangeInfoPerfil, avatar } = props;
  return (
    <>
      <Button className={classes.button} onClick={handleChangeInfoPerfil}>
        <Avatar 
          src={avatar}
          className={classes.avatar} />
        Nome da pessoa
        <ExpandMoreIcon fontSize="small" />
      </Button>
      <IconButton onClick={changeTheme}>
        <Brightness4Icon className={classes.brigthIcon} />
      </IconButton>
    </>
  );
}
