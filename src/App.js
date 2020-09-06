import React from 'react';
import InfoPokemon from './components/infoPokemon';
import { HashRouter, Switch, Route } from "react-router-dom";
import ContentPokemon from './components/ContentPokemon';
function App() {
  return (
    <HashRouter> {/* envolvemos nuestra aplicación en el Router  */}
    <Switch> {/* también la envolvemos en el componente Switch */}
      <Route path="/" component={ContentPokemon} exact /> {/* y creamos nuestras rutas */}
      <Route path="/InfoPokemon" component={InfoPokemon} exact />
     
    </Switch>
  </HashRouter>
  );
}

export default App;
