import { GoLocation } from 'react-icons/go';

export const CardLocation = () => {
    return (
        <div className="location">
            <div className="ubicacion">
                <p>Se está mostrando el menú del <br /> restaurante</p>
                <div className='globo'>
                    <GoLocation size={"1.5rem"} />
                    <h4>GENERAL</h4>
                </div>
            </div>
            <div className="options">
                <button>Cambiar</button>
            </div>
        </div>
    )
}
