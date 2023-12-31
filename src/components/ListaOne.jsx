// import React, { useEffect, useState } from 'react'
// import { SwiperSlide } from 'swiper/react';
// import { Swiper } from 'swiper/types';
// import { Footer } from "../components/Footer";
//import { Header } from "../components/Header";
//import { Slider } from "../components/Slider";
import { useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/Home.css';
import '../styles/Cards.css';
import 'swiper/css';
import '../styles/slider.css';
import { Slider } from "./Slider";


export const ListaOne = () => {

    const [data, setData] = useState([]);
    const [menu, setMenu] = useState([]);

    const getData = async () => {
        const res = await fetch("http://localhost:3000/productos");
        const data = await res.json();
        // console.log(data)
        setData(data[4].promociones_online);
    }

    const getMenu = async () => {
        const response = await fetch("http://localhost:3000/productos");
        const request = await response.json();
        setMenu(request[5].menu);
    }

    useEffect(() => {
        document.title = "Inicio"
    }, [])

    useEffect(() => {
        getData();
        getMenu();
    }, []);

    return (
        <>
            <Slider />
            <div className="container">
                <h2 className="titleOne">PROMOCIONES DE HAMBURGUESAS</h2>
                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    className="personales"
                >
                    {
                        data.map((info) => (
                            <SwiperSlide key={info.id}>
                                <div className="containerPaco">
                                    <div className="containerCardsBembos">
                                        <Cards data={info} texto={"Ver más"} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <h2 className="titleTwo">MENU DE HAMBURGUESAS</h2>


                <Swiper
                    spaceBetween={1}
                    slidesPerView={4}
                    className="personales"
                >
                    {
                        menu.map((anuncio) => (
                            <SwiperSlide key={anuncio.nombre}>
                                <div className="containerPaco">
                                    <div className="containerCardsBembos">
                                        <Cards data={anuncio} texto={"Ver Todos"} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}
