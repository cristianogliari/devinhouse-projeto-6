import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { SearchBar } from "./SearchBar";
import { AvatarArea } from "./AvatarArea";
import { ProfileCard } from "./ProfileCard";

import { useStyles } from "./Navbar.styles";

const loginStatus = true;

export function Navbar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.botoes} color="primary">
        <Toolbar className={classes.toolBar} variant="regular">
          {loginStatus === false ? (
            <>
              <Typography>Realize o login</Typography>
            </>
          ) : (
            <>
              <div className={classes.divSearchBar}>
                <SearchBar />
              </div>
              <div className={classes.divAvatarArea}>
                <AvatarArea />
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
      <div className={classes.divProfile}>
        <ProfileCard />
      </div>
    </>
  );
}
