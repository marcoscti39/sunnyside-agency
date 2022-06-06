import React from 'react'

import witness1 from '..//assets/imgs/persons/image-emily.jpg'
import witness2 from "../assets/imgs/persons/image-jennie.jpg"
import witness3 from "../assets/imgs/persons/image-thomas.jpg"

import "./style.css"

function Testimonials() {
    return (
        <section className="testimonials">
            <h2 className="testimonials-title">client testimonials</h2>
            <article className="testimonials-person adjustment">
                <img className="testimonials-photo" src={witness1} alt="person's photo" />

                <blockquote className="testimonials-text">
                    We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                </blockquote>

                <span className="testimonials-name">emily r.</span>
                <span className="testimonials-profession">marketing director</span>
            </article>
            <article className="testimonials-person">
                <img className="testimonials-photo" src={witness2} alt="person's photo" />

                <blockquote className="testimonials-text">
                    Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience. 
                </blockquote>

                <span className="testimonials-name">thomas s.</span>
                <span className="testimonials-profession">chief operation officer</span>
            </article>
            <article className="testimonials-person">
                <img className="testimonials-photo" src={witness3} alt="person's photo" />

                <blockquote className="testimonials-text">
                    Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                </blockquote>

                <span className="testimonials-name">jennie f.</span>
                <span className="testimonials-profession">business owner</span>
            </article>

        </section>
    )
}

export default Testimonials
