import { Card, Typography, CardHeader, Avatar, Button, Divider } from "@material-ui/core";

import { useStyles } from "./ProfileCard.styles";

export function ProfileCard() {
  const classes = useStyles();

  return (
    <Card className={classes.profileCard}>
      <div className={classes.divAvatar}>
        <CardHeader avatar={<Avatar className={classes.avatar} src="https://i.pravatar.cc/300" />} />
        <Typography>Nome da Pessoa</Typography>
      </div>
      <Divider className={classes.divider}/>
      <div className={classes.divButton}>
          <Button>
              Sair
          </Button>
      </div>
    </Card>
  );
}
