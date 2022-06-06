import React from 'react'
import eggImg from '../assets/imgs/desktop/image-transform.jpg'
import standOut from '../assets/imgs/desktop/image-stand-out.jpg'



import './style.css'

function Main() {
    return (
        <main className="sunnyside-main">
            <section className="main-section-transform">
                <div className="wrapper">
                    <h2 className="main-section-title">Transform your brand</h2>
                    <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you. </p>
                    <a href="#" className="transform-learn-more"> learn more</a>
                </div>

            </section>
            <section className="main-section-image" ><img src={eggImg} alt="" /></section>
            <section className="main-section-image"><img src={standOut} alt="" /></section>
            <section className="main-section-stand-out">
                <div className="wrapper">
                    <h2 className="main-section-title">Stand out to the right audience</h2>
                    <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                    <a href="#" className="stand-out-learn-more"> learn more</a>
                </div>

            </section>
            <section className="main-section-graphic-design">
                <h2 className="title-graphic-design">Graphic Design</h2>
                <p className="paragraph-graphic-design">Graphic design Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention. </p>
            </section>
            <section className="main-section-photography">
                <h2 className="title-photography">
                    Photography
                </h2>
                <p className="paragraph-photography">
                    Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                </p>
            </section>
        </main>
    )
}

export default Main
