import { BiSearch } from 'react-icons/bi';

export const Busqueda = () => {
    return (
        <div className="renglones">
            <h3>Promos Delivery - Cyber Buenazo con hasta <br /> 40% dto.</h3>
            <div className='wrapper'>
                <input type="text" placeholder="Buscar Producto" />
                <button><BiSearch size={"1.2rem"} /></button>
            </div>
        </div>
    )
}
