import React from 'react'
import { Link } from "react-router-dom";



const infoPokemon = ({ pokemones, nombrePoke }) => {
    if (pokemones.length >= 1) {
        return (
            <section id="section-pokemon" className='contenido-pokemones row row-cols-2 row-cols-md-4'>
                {pokemones.map((info, index) => {
                    if (info.name.includes(nombrePoke.toLowerCase()) || nombrePoke == "") {
                        return (
                            <Link to={`/infoPokemon/${info.id}`} key={index}>
                                <article className='tarjeta'>
                                    <div className='conte-selfie'>
                                        <img className='selfie' src={info.sprites.front_default} />
                                    </div>
                                    <div className='cuerpo-tarjeta'>
                                        <div className='tarjeta-identidad'>
                                            <p className='text-info'><strong>Nombre:</strong> {info.name}</p>
                                            <p><strong className='text-info'>Id:</strong>  {info.id}</p>
                                        </div>
                                        <div className='tarjeta-tipos'>
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