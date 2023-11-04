import React from 'react'

export const Cards = () => {

    // data.map((datos) => {
    //     console.log(datos)
    // })

    const imagenes = {
        img:"https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-royal-cheese-bb.webp"
    }

  return (


    <section>
        <div>
            <article>
                <img src={imagenes.img} alt="" />
                
            </article>
        </div>
    </section>
  )
}
