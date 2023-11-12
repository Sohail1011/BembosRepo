import { CardLocation } from "../components/CardLocation"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import '../styles/Menu.css'

export const MenuPage = () => {
    return (
        <>
            <Header />
            <div className="centrado">
                <CardLocation />
                <div className="cyber">
                    <h2>Elige tu Menú Bembos</h2>
                    <hr />
                </div>
            </div>
            <Footer />
        </>
    )
}
