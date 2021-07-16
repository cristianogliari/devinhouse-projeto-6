import { IconButton, Avatar, Button } from "@material-ui/core";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useStyles } from "./AvatarArea.styles";

export function AvatarArea(props) {
  const classes = useStyles();

  const { handleOpenCard } = props;
  return (
    <>
      <IconButton>
        <Brightness4Icon className={classes.brigthIcon} />
      </IconButton>

      <Button className={classes.button} onClick={handleOpenCard}>
        <Avatar src="https://i.pravatar.cc/300" className={classes.avatar} />
        Nome da pessoa
        <ExpandMoreIcon fontSize="small" />
      </Button>
    </>
  );
}
