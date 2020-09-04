import React, { Component } from 'react';
import InfoPokemon from './infoPokemon';
import Search from './Search';
import Image from './../images/pokemon.jpg'
import './styles/ContentPokemon.css'

export default class ContentPokemon extends Component {
     constructor(props) {
        super(props);
        this.state = {
            pokemones: [],
            nombrePoke: ""
        }
    }
    componentDidMount() {
        let URL = "https://pokeapi.co/api/v2/pokemon?limit=25";

        fetch(URL, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((datos) =>
                datos.results.map((item) => {
                    this.cargarPokemon("https://pokeapi.co/api/v2/pokemon/" + item.name)
                })
            )
            .catch((error) => console.error(error));
    }
    cargarPokemon = (URL) => {
        fetch(URL, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((datos) => {
                let elementos = this.state.pokemones;
                elementos.push(datos);
                this.setState({
                    pokemones: elementos
                })
            }
            )
            .catch((error) => console.error(error));
    }
    handlerChange = (e) => {
        this.setState({
            nombrePoke: e.target.value
        })
    }

    render() {
        return (
            <div className='total'>
                 <div className='container container-sm  container-fluid contenido-total'>
                    <div className='banner'><img src={Image} /></div>
                    <Search
                        handlerChange={(e) => this.handlerChange(e)}
                        nombrePoke={this.state.nombrePoke}
                    />
                    <InfoPokemon
                        pokemones={this.state.pokemones}
                        nombrePoke={this.state.nombrePoke}
                    />
                     
                </div>
            </div>
        )
    }
}
