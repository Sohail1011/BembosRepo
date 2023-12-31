import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Listado = () => {

    const [burger, setBurger] = useState([]);

    const getBurger = async () => {
        const response = await fetch("http://localhost:3000/productos");
        const dataBurger = await response.json();
        setBurger(dataBurger[0].hamburguesas);
    }

    useEffect(() => {
        document.title = "Hamburguesas";
    })

    useEffect(() => {
        getBurger();
    }, []);
  return (
    <>
        <div className="ContainerFloranteBurger noneFlotante" >
                    <h2 className="itemBurger">Combos</h2>
                    <h2 className="itemBurger burger">Hamburguesas</h2>
                    <h2 className="itemBurger">Pollo</h2>
                    <h2 className="itemBurger">Loncherítas</h2>
                    <h2 className="itemBurger">Complementos</h2>
                    <h2 className="itemBurger">Bebidas</h2>
                    <h2 className="itemBurger">Helados</h2>
                    <h2 className="itemBurger">Inka Chips</h2>
                </div>
            <div className="containerPadreBurger">
                
                <h2 className="TitleOneBurger">¡DISFRUTA DE NUESTRAS HAMBURGUESAS A LA PARRILLA!</h2>
                <div className="gridBurgerPage">
                    {burger.map((imgBuger) => (
                        <div key={imgBuger.id} className="containerBurgerCards">
                            <img className="imgBurger" src={imgBuger.img} />
                            <div className="containerTextBurger">
                                <h2 className="titleCardBurger">{imgBuger.nombre}</h2>
                                <p className="precioBurger">S/{imgBuger.precio}</p>
                                <p className="enlaceCardBurger">Terminos y condiciones</p>
                                <Link className="btnBurger" to={`/hamburguesa/contacts/${imgBuger.id}`} >Ver mas</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="containerTitlePreguntas">
                        <h2 className="titleTextPreguntasBurger">HAMBURGUESAS A LA PARRILLA</h2>
                        <p className="textPreguntasBurger">Sabemos que la preparación de la carne de una hamburguesa es una de las partes más importantes. Por ello, Bembos te ofrece una técnica de cocción única en la que la mantenemos suspendida sobre el fuego para otorgarle la jugosidad perfecta que nos caracteriza. Combina tu hamburguesa de carne a la parrilla con los mejores ingredientes que hemos elegido para ti: tocino, plátano, tomate, lechuga, huevo, queso y mucho más. ¡No esperes más y empieza a disfrutar de lo mejor del sabor peruano!</p>
                    </div>
                    <h2 className="titlePreguntasBurger">PREGUNTAS FRECUENTES SOBRE NUESTRAS HAMBURGUESAS</h2>

                    <div className="containerPreguntasBurger">
                        <p className="preguntasBurger">¿Cuántos puntos recibo por comprar una hamburguesa online delivery?</p>
                        <p className="preguntasBurger">¿De qué están hechas las hamburguesas a la parrilla de Bembos?</p>
                        <p className="preguntasBurger">¿Las hamburguesas delivery de Bembos están acompañadas de papas fritas?</p>
                        <p className="preguntasBurger">¿Qué adicionales tienen las hamburguesas a la parrilla de Bembos?</p>
                    </div>
                </div>
            </div>
    </>
  )
}
