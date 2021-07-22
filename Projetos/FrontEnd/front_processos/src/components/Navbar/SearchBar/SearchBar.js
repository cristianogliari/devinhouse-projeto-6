import {
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
  MenuItem,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";

import { useDataContext } from "../../../utils/context/DataContext";
import { useStyles } from "./SearchBar.styles";
import { useState } from "react";

export function SearchBar() {
  const classes = useStyles();

  const { listaAssunto } = useDataContext();

  const [searchState, setSearchState] = useState(true);
  const [assuntoSelecionado, setAssuntoSelecionado] = useState(0);

  const handleChangeSearch = () => {
    setSearchState((prev) => !prev);
    console.log(assuntoSelecionado);
  };

  return (
    <>
      {searchState ? (
        <TextField
          className={classes.searchBar}
          placeholder="Pesquise por um processo"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Tooltip title="Mude o filtro">
                  <IconButton onClick={handleChangeSearch}>
                    <TuneIcon style={{ color: "black" }} />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon style={{ color: "black" }} />
                </IconButton>
              </InputAdornment>
            ),
            classes: {
              input: classes.searchBarPlaceHoldeColor,
            },
          }}
          InputLabelProps={{
            shrink: false,
          }}
        />
      ) : (
        <TextField
          className={classes.searchBar}
          select
          placeholder="Pesquise por um assunto"
          variant="outlined"
          size="small"
          value={assuntoSelecionado}
          onChange={(e) => {
            setAssuntoSelecionado(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Tooltip title="Mude o filtro">
                  <IconButton onClick={handleChangeSearch}>
                    <TuneIcon style={{ color: "black" }} />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
            classes: {
              input: classes.searchBarPlaceHoldeColor,
            },
          }}
          InputLabelProps={{
            shrink: false,
          }}
        >
          <MenuItem key={0} value={0}>
            Selecione um assunto
          </MenuItem>
          {listaAssunto?.map((assunto) => (
            <MenuItem key={assunto.id} value={assunto.id}>
              {assunto.descricao}
            </MenuItem>
          ))}
        </TextField>
      )}
    </>
  );
}
