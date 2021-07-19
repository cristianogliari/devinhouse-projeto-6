import { TextField, InputAdornment, IconButton } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import { useStyles } from "./SearchBar.styles";

export function SearchBar() {
  const classes = useStyles();

  return (
    <TextField
      className={classes.searchBar}
      placeholder="Pesquise por um processo"
      variant="outlined"
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon style={{color: "black"}}/>
            </IconButton>
          </InputAdornment>
        ),
        classes: {
          input: classes.searchBarPlaceHoldeColor
        }
      }}
      InputLabelProps={{
        shrink: false,
      }}
    />  
  );
}
