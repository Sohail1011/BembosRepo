import { useEffect } from "react"
import { Cards } from "../components/Cards"
import { Navbar } from "../components/Navbar"

export const HomePage = () => {

    useEffect(() => {
        async function getData() {
            const res = await fetch("http://localhost:3000/productos");
            const data = await res.json();
            console.log(data);
        }
        getData();
    }, []);

    return (
        <>
            <Navbar />
            <Cards />
        </>
    )
}
