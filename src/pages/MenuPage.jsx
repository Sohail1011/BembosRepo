import { Swiper, SwiperSlide } from "swiper/react"
import { CardLocation } from "../components/CardLocation"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Autoplay, Navigation } from "swiper/modules";
import '../styles/Menu.css'
import { Vasos } from "../components/Vasos";
import { useEffect } from "react";
import { useState } from "react";

export const MenuPage = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        async function getMenu() {
            const res = await fetch("http://localhost:3000/productos");
            const req = await res.json();
            setMenu(req[5].menu);
        }
        getMenu();
    }, []);

    const ingredientes = [
        {
            id: 1,
            nombre: 'descuento',
            url: 'https://www.bembos.com.pe/_ipx/q_75/https://d31npzejelj8v1.cloudfront.net/media/wysiwyg/1699029233_falta-poco-cyber-noviembre-2023-1280x400.webp'
        },
        {
            id: 2,
            nombre: 'tocino',
            url: 'https://www.bembos.com.pe/_ipx/q_75/https://d31npzejelj8v1.cloudfront.net/media/wysiwyg/1687457355_1280x400-duo-queso-tocino-julio-nuevo.webp'
        },
        {
            id: 3,
            nombre: 'julio',
            url: 'https://www.bembos.com.pe/_ipx/q_75/https://d31npzejelj8v1.cloudfront.net/media/wysiwyg/1687444321_1280x400-parrillera-nuevo-julio.webp'
        }
    ]

    return (
        <>
            <Header />
            <div className="centrado">
                <CardLocation />
                <div className="cyber">
                    <h2>Elige tu Menú Bembos</h2>
                    <hr />
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Navigation]}
                        navigation={true}
                        className="presentacion"
                    >
                        {
                            ingredientes.map((i) => (
                                <SwiperSlide key={i.id}>
                                    <img src={i.url} alt={i.nombre} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="refrescos">
                    {
                        menu.map((m) => (
                            <Vasos key={m.nombre} informacion={m.nombre} picture={m.img} />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}
