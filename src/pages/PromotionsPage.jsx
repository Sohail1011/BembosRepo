import { useEffect } from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const PromotionsPage = () => {

    useEffect(() => {
        document.title = "Promociones";
    }, [])

    return (
        <>
            <Header />
            <div>PromotionsPage</div>
            <Footer />
        </>
    )
}
