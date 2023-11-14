import React from 'react'
import { useParams } from 'react-router-dom'

export const BurgerChildren = () => {

    const params = useParams();
    console.log(params)

    // const data = [

    //     {
    //         id: 1,
    //         img: "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-clasica_1_1.jpg"
    //     },
    //     {
    //         id: 2,
    //         img: "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-cheese-base.jpg"
    //     },
    //     {
    //         id: 3,
    //         img: "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-tocino_1.jpg"
    //     },
    //     {
    //         id: 4,
    //         img: "https://www.bembos.com.pe/_ipx/q_85,w_290,f_webp/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/h/a/hamburguesa-bembos-royal-base_1.jpg"
    //     },
    // ]



  return (
    <div>
        ContactById - {params.contactid}
        {/* {data.map((imageness) => (
            <img src={imageness.img} alt="" />
        ))} */}
    </div>
  )
}
