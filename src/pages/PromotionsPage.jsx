import { useEffect } from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Anuncios } from "../components/Anuncios"

export const PromotionsPage = () => {

    useEffect(() => {
        document.title = "Promociones";
    }, [])

    return (
        <>
            <Header />
            <Anuncios />
            <Footer />
        </>
    )
}
