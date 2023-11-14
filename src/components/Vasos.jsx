/* eslint-disable react/prop-types */
export const Vasos = ({ informacion = 'null', picture }) => {
    return (
        <div className="refrescos-vasos">
            <h3>{informacion}</h3>
            <img src={picture} alt={informacion} />
            <button>Ver Todos</button>
        </div>
    )
}
