import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Toolbar,
  AppBar,
  TextField,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import { toFirstCharUppercase } from "./constants";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import Image from "./images/pokemon.jpg";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
    
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
    backgroundColor:"red",
  },
  searchContainer: {
    display: "flex",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    width: "200px",
    margin: "5px",
  },
}));

const Pokedex = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [pokemonData, setPokemonData] = useState({});
  const [filter, setFilter] = useState("");
  const [limit, setLimit] = useState(25);
  function nextList() {
    setLimit(limit + 25);
  }
  function prevList() {
    if (limit === 25) return;
    setLimit(limit - 25);
  }
  useEffect(() => {
    function fetchData() {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        .then(function (response) {
          const { data } = response;
          const { results } = data;
          const newPokemonData = {};
          results.forEach((pokemon, index) => {
            newPokemonData[index + 1] = {
              id: index + 1,
              name: pokemon.name,
              sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`,
            };
          });
          setPokemonData(newPokemonData);
        });
    }
    fetchData();
  }, [limit]);
  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };
  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];
    return (
      <Grid item xs={3} key={pokemonId}>
        <Card onClick={() => history.push(`/${id}`)}>
          <CardMedia
            className={classes.cardMedia}
            image={sprite}
            style={{ width: "120px", height: "130px" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <div>
        <img
          className="img-thumbnail img-fluid"
          style={{ maxWidth: "100%", height: "auto" }}
          src={Image}
        />
      </div>
      <AppBar position="static" style={{ backgroundColor: "red" }}>
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              onChange={handleSearchChange}
              label="Encuentra tu Pokemon"
              variant="standard"
            />
          </div>
        </Toolbar>
      </AppBar>
      
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map(
            (pokemonId) =>
              pokemonData[pokemonId].name.includes(filter) &&
              getPokemonCard(pokemonId)
           
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};
export default Pokedex;
