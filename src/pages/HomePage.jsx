import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Cards } from "../components/Cards";
import '../styles/Home.css';

export const HomePage = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch("http://localhost:3000/productos");
        const data = await res.json();
        //setData(data[3]);
        setData(data[3].promociones_personales);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Navbar />
            <section className="personales">
                {
                    data.map((info) => (
                        <Cards key={info.id} data={info} />
                    ))
                }
            </section>

            <Footer />
        </>
    )
}
