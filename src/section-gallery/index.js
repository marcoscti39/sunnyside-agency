import React from 'react'

import img1 from "../assets/imgs/desktop/image-gallery-milkbottles.jpg"
import img2 from "../assets/imgs/desktop/image-gallery-orange.jpg"
import img3 from "../assets/imgs/desktop/image-gallery-cone.jpg"
import img4 from "../assets/imgs/desktop/image-gallery-sugarcubes.jpg"

import "./style.css"

function Gallery() {
    return (
        <section className="sunnyside-gallery">
            <img className="gallery-img" src={img1} alt="" />
            <img className="gallery-img" src={img2} alt="" />
            <img className="gallery-img" src={img3} alt="" />
            <img className="gallery-img" src={img4} alt="" />

        </section>
    )
}

export default Gallery
