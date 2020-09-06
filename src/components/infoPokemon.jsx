import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/infoPokemon.css'

const infoPokemon = ({ pokemones, nombrePoke }) => {
    if (pokemones.length >= 1) {
        return (
            <section id="section-pokemon" className='row row-cols-3 justify-content-center'>
                {pokemones.map((info, index) => {
                    if (info.name.includes(nombrePoke.toLowerCase()) || nombrePoke == "") {
                        return (
                            <Link to={`/infoPokemon/${info.id}`} key={index}>
                                <article className='card align-items-center style="text-decoration:none"'>
                                    <div className='conte-img'>
                                        <img className='img' src={info.sprites.front_default} />
                                    </div>
                                    <div className='Body-card'>
                                        <div className='card-pokemon'>
                                            <p><strong className='info '>#</strong>  {info.id}</p>
                                            <p className='text text-white '> {info.name}</p>
                                            
                                        </div>
                                        <div className='card-tipos text-dark'>
                                            {info.types.map((tipo) => {
                                                return <span className='tipo' key={tipo.type.name}>{tipo.type.name}</span>
                                            })}
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        )
                    }
                })}
            </section>
        )
    }
    else {
        return <p>No hay datos</p>
    }
}
export default infoPokemon;