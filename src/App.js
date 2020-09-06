
import React from "react";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <Switch>
    <Route exact path="/" render={(props) => <Pokedex {...props} />} />
    <Route exact path="/:pokemonId" render={(props) => <Pokemon {...props} />}
    <Route path="/" component={ContentPokemon} exact /> {/* y creamos nuestras rutas */}
    <Route path="/InfoPokemon" component={InfoPokemon} exact />
    />
  </Switch>
);


export default App;
