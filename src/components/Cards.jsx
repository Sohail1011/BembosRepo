/* eslint-disable react/prop-types */
// import { useState } from 'react'
import '../styles/Cards.css'

export const Cards = ({ data }) => {


    return (
        <article >
            <div className='tarjeta'>
                <img className='imagen'  src={data.img} alt={data.nombre} />
                <div className='texto'>
                    <h2 className='subTileOnline'>{data.nombre}</h2>
                    <div className='precios'>
                        <p className='precioActual'>{data.precio_actual}</p>
                        <p className='precioAntiguo'>{data.precio_antiguo}</p>
                    </div>
                    <button className='btnOnline'>Ver mas</button>
                </div>
            </div>
        </article>
    )
} 
