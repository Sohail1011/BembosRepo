/* eslint-disable react/prop-types */
export const Vasos = ({ informacion = 'null', picture }) => {
    return (
        <div>
            <h3>{informacion}</h3>
            <img src={picture} alt={informacion} />
        </div>
    )
}
