import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import "../styles/Burger.css"
import { Outlet } from "react-router-dom";

export const BurgerPage = () => {
    // const [burger, setBurger] = useState([]);

    // const getBurger = async () => {
    //     const response = await fetch("http://localhost:3000/productos");
    //     const dataBurger = await response.json();
    //     console.log(dataBurger)
    //     setBurger(dataBurger[0].hamburguesas);

    // }

    // useEffect(() => {
    //     document.title = "Hamburguesas";
    // })

    // useEffect(() => {
    //     getBurger();
    // }, []);


    // window.addEventListener("scroll", (e) => {
    //     console.log(e)
    // })

    return (
        <>
            <Header />
            <Outlet />


            <Footer />
        </>
    )
}
