import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Cards } from "../components/Cards";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/Home.css';
import 'swiper/css';

export const HomePage = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch("http://localhost:3000/productos");
        const data = await res.json();
        //setData(data[3]);
        console.log(data)
        setData(data[4].promociones_online);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <h2>Promociones de hamburguesas online</h2>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    className="personales"
                >
                    {
                        data.map((info) => (
                            <SwiperSlide key={info.id}>
                                <Cards data={info} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <Footer />
        </>
    )
}
