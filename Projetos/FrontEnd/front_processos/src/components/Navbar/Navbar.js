import { AppBar, Toolbar } from "@material-ui/core";
import { useState } from "react";

import { SearchBar } from "./SearchBar";
import { AvatarArea } from "./AvatarArea";
import { ProfileCard } from "./ProfileCard";
import { LogoArea } from "./LogoArea";

import { useStyles } from "./Navbar.styles";

import { decodeTokenFunction } from "../../utils/jwtDecode/jwtDecode";

import bezosFour from "../../assets/images/bezosFour.png";

const loginStatus = true;

export function Navbar() {
  const classes = useStyles();
  const userData = decodeTokenFunction();
  const avatar = bezosFour;

  const [abreInfoPerfil, setInfoPerfil] = useState(false);

  const handleChangeInfoPerfil = () => {
    setInfoPerfil((prev) => !prev);
  };

  const handleClickAway = () => {
    setInfoPerfil(false);
  };

  return (
    <>
      <AppBar position="static" className={classes.navBar} color="primary">
        <Toolbar
          className={
            loginStatus === false ? classes.toolBarOff : classes.toolBarLogado
          }
          variant="regular"
        >
          <LogoArea />
          {loginStatus === true && (
            <>
              <div className={classes.divSearchBar}>
                <SearchBar />
              </div>
              <div className={classes.divAvatarArea}>
                <AvatarArea 
                  handleChangeInfoPerfil={handleChangeInfoPerfil}
                  avatar={avatar}
                  nomeCompleto={userData.nomeCompleto} />
              </div>
            </>
          )}
        </Toolbar>
        {abreInfoPerfil === true && (
          <div className={classes.divProfile}>
            <ProfileCard 
              clickAwayEvent={handleClickAway}
              avatar={avatar}
              nomeCompleto={userData.nomeCompleto}
              email={userData.email} />
          </div>
        )}
      </AppBar>
    </>
  );
}
