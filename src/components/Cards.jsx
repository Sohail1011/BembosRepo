/* eslint-disable react/prop-types */
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Cards.css'

export const Cards = ({ data, texto = 'null' }) => {

    // console.log(dataOne)
    return (
        // <article className='padre'>
            <div className='tarjeta'>
                <img className='imgCards' src={data.img} alt={data.nombre} />
                <div className='texto'>
                    <h2 className='subTileOnline'>{data.nombre}</h2>
                    <div className='precios'>
                        <p className='precioActual'>{data.precio_actual}</p>
                        <p className='precioAntiguo'>{data.precio_antiguo}</p>
                    </div>
                    <Link className='btnOnline' to={`/cards/${data.id}`}  >{texto}</Link>
                </div>
            </div>
        // </article>
    )
} 
