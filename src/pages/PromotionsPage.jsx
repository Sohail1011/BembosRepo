import { useEffect, useState } from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Anuncios } from "../components/Anuncios"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from "swiper/modules";
import { CgUser } from 'react-icons/cg';

export const PromotionsPage = () => {

    const [personal, setPersonal] = useState([]);

    useEffect(() => {
        async function getPromos() {
            const req = await fetch("http://localhost:3000/productos");
            const res = await req.json();
            setPersonal(res[3].promociones_personales);
        }
        getPromos();
    })

    useEffect(() => {
        document.title = "Promociones";
    }, [])

    return (
        <>
            <Header />
            <Anuncios />
            <section className="ads">
                <hr />
                <article className="almuerzo">
                    <h2>Promociones de Hamburguesas para ti con delivery</h2>
                    <hr />
                </article>
                <article className="prom-personal">
                    <div className="info-matter">
                        <CgUser size={"2rem"} />
                        <h2>Promociones Personales</h2>
                    </div>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        grid={{
                            rows: 2,
                        }}
                        navigation={true}
                        modules={[
                            Grid,
                            Navigation
                        ]}
                        className="refrescos"
                    >
                        {
                            personal.map((p) => (
                                <SwiperSlide key={p.id}>
                                    <div>{p.nombre}</div>
                                </SwiperSlide>))
                        }
                    </Swiper>
                </article>

            </section>

            <Footer />
        </>
    )
}
