import {
  Card,
  Typography,
  CardHeader,
  Avatar,
  Button,
  Divider,
  ClickAwayListener
} from "@material-ui/core";

import { useKeycloak } from "@react-keycloak/web";

import { useStyles } from "./ProfileCard.styles";

export function ProfileCard(props) {
  const classes = useStyles();
  const { keycloak } = useKeycloak();
  const { clickAwayEvent, avatar, nomeCompleto, email } = props;

  const handleLogout = () => {
    keycloak.logout();
    localStorage.removeItem("keycloak-token");
  }

  return (
    <ClickAwayListener onClickAway={clickAwayEvent}>
      <Card className={classes.profileCard}>
        <div className={classes.divAvatar}>
          <CardHeader
            avatar={
              <Avatar
              alt="avatar-img"
                className={classes.avatar}
                src={avatar}
              />
            }
          />
          <Typography>{nomeCompleto}</Typography>
          <Typography>{email}</Typography>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.divButton}>
          <Button onClick={handleLogout}>Sair</Button>
        </div>
      </Card>
    </ClickAwayListener>
  );
}
