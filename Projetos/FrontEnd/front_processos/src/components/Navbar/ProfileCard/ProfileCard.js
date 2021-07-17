import {
  Card,
  Typography,
  CardHeader,
  Avatar,
  Button,
  Divider,
  ClickAwayListener
} from "@material-ui/core";

import { useStyles } from "./ProfileCard.styles";

export function ProfileCard(props) {
  const classes = useStyles();

  const {clickAwayEvent} = props;

  return (
    <ClickAwayListener onClickAway={clickAwayEvent}>
      <Card className={classes.profileCard}>
        <div className={classes.divAvatar}>
          <CardHeader
            avatar={
              <Avatar
                className={classes.avatar}
                src="https://i.pravatar.cc/300"
              />
            }
          />
          <Typography>Nome da Pessoa</Typography>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.divButton}>
          <Button>Sair</Button>
        </div>
      </Card>
    </ClickAwayListener>
  );
}
