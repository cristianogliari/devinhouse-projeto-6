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
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        shrink: false,
      }}
    />  
  );
}
