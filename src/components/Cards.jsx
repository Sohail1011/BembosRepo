/* eslint-disable react/prop-types */
import '../styles/Cards.css'

export const Cards = ({ data }) => {
    return (
        <article className='tarjeta'>
            <img src={data.img} alt={data.nombre} />
            <h2>{data.nombre}</h2>
            <p>{data.precio_actual}</p>
        </article>
    )
} 
