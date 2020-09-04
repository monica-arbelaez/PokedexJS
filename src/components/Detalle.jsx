import React, { Component } from 'react'
import { Link } from "react-router-dom"

var poke = {}
const Detalles = (props) => {
    console.log(props.match.params)
    const { infoId } = props.match.params // aqui vienen los parametros
    FindInfoById(infoId)

    console.log(FindInfoById(infoId))
    return (
        <div id={infoId} >
            <Link to="/info">Ir atras</Link>
            <p><strong>Nombre {poke.name} ooo</strong></p>
            <p><strong>Habilidades</strong></p>
            <p><strong>Estadísticas</strong></p>
            <p><strong>Peso</strong></p>
            <p><strong>Altura</strong></p>
        </div>
    )
}

let FindInfoById = async (infoId) => {
    infoId = Number(infoId)
    const url = "https://pokeapi.co/api/v2/pokemon/" + infoId;
    const res = await fetch(url);
    const data = await res.json();
    return data
}
    export default Detalles;