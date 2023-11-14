import { Letreros } from "./Letreros"
import '../styles/Promotions.css'
import { Busqueda } from "./Busqueda"

export const Anuncios = () => {
    return (
        <div>
            <Letreros />
            <Busqueda />
            <hr />
            <div className="ads">
                <h2>Promociones de Hamburguesas</h2>
            </div>
        </div>
    )
}
