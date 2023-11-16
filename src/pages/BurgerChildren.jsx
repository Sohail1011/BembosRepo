import { useParams } from 'react-router-dom'
/* import { Header } from '../components/Header';
import { Footer } from '../components/Footer'; */

export const BurgerChildren = () => {

    const params = useParams();
    console.log(params)

    const data = [

        {
            id: 1,
            img: "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-clasica_1_1.jpg",
            name: 'Burger'
        },
        {
            id: 2,
            img: "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-cheese-base.jpg",
            name: 'Burger2'
        },
        {
            id: 3,
            img: "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-tocino_1.jpg",
            name: 'Burger3'
        },
        {
            id: 4,
            img: "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-royal-base_1.jpg",
            name: 'Burger4'
        },
    ]



    return (
        <div>
            ContactById - {params.id}
            {data.map((imageness) => (
                <img key={imageness.id} src={imageness.img} alt={imageness.name} />
            ))}
            <div>

            </div>
        </div>
    )
}
