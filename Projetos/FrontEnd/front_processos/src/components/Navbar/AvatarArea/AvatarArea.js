import { IconButton, Avatar, Button } from "@material-ui/core";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useStyles } from "./AvatarArea.styles";

export function AvatarArea(props) {
  const classes = useStyles();

  const { handleChangeInfoPerfil } = props;
  return (
    <>
      <Button className={classes.button} onClick={handleChangeInfoPerfil}>
        <Avatar src="https://i.pravatar.cc/300" className={classes.avatar} />
        Nome da pessoa
        <ExpandMoreIcon fontSize="small" />
      </Button>
      <IconButton>
        <Brightness4Icon className={classes.brigthIcon} />
      </IconButton>
    </>
  );
}
