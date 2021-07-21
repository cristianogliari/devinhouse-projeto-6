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
  const {clickAwayEvent, avatar} = props;

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
                className={classes.avatar}
                src={avatar}
              />
            }
          />
          <Typography>Nome da Pessoa</Typography>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.divButton}>
          <Button onClick={handleLogout}>Sair</Button>
        </div>
      </Card>
    </ClickAwayListener>
  );
}
