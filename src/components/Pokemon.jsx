import React, { useEffect, useState } from "react";
import { Typography, Link, CircularProgress, Button, Card } from "@material-ui/core";
import { toFirstCharUppercase } from "./constants";
import axios from "axios";
import shadows from "@material-ui/core/styles/shadows";

const Pokemon = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);
  const generatePokemonJSX = (pokemon) => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
       <div  style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
      <Card  style={{width:"400px", height: "550px", backgroundColor:"orange", color:"white", padding:"20px"}}>
        <Typography variant="h2" style= {{margin: "20px"}}>
          {`${id}.`} {toFirstCharUppercase(name)}
        </Typography>
        <img style={{ width: "200px", height: "120px", margin: "10px"}} src={fullImageUrl}/>
        <Typography variant="h4" style= {{margin: "10px"}}>Información</Typography>
        <Typography style= {{margin: "10px"}}>
          {"Species: "}
          <Link style= {{color: "white"}}href={species.url}>{species.name} </Link>
        </Typography>
        <Typography style= {{margin: "10px"}}>Altura: {height} </Typography>
        <Typography style= {{margin: "10px"}}>Peso: {weight} </Typography>
        <Typography variant="h6" style= {{margin: "10px"}}>Tipo:</Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return <Typography style= {{margin: "10px"}} key={name}>{`${name}`}
          </Typography>;
        })}
      </Card>
      </div> 
    );
  };
  return (
    <>
  
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <Typography> Pokemon not found</Typography>}
      {pokemon !== undefined && (
        <Button style={{position: 'absolute', 
        left: '50%', 
        top: '101%',
        transform: 'translate(-50%, -50%)'}}type="button" className="btn btn-outline-primary btn-lg center-block d-block mx-auto container text-align-center justify-content-justify align-content-center" variant="contained" color="secondary" onClick={() => history.push("/")}>
          Regresar
        </Button>
      )}
    </>
  );
};
export default Pokemon;