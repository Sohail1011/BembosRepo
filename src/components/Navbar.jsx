import { BiPhone, BiUser } from "react-icons/bi";
import '../styles/Header.css';
import SVGComponent from "../assets/SVGComponent";

export const Navbar = () => {
    return (
        <header>
            <nav className="principal">
                <SVGComponent />
                <article className="delivery">
                    <section>
                        <BiPhone size={"3rem"} />
                    </section>
                    <section className="info">
                        <div className="actions">
                            <h5>Delivery</h5>
                            <select name="" id="">
                                <option value="">Lima</option>
                            </select>
                        </div>
                        <p>014191919</p>
                    </section>
                    <section className="person">
                        <BiUser size={"1.5rem"} />
                        <button>Ingresar o crear una cuenta</button>
                    </section>
                </article>
            </nav>
        </header>
    )
}
