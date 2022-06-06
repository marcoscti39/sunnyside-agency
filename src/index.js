import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header/Header';
import Main from './Main'
import Testimonials from "./section-testimonials"
import Gallery from "./section-gallery"
import Footer from "./footer"


/* CSS */
import "./globals/reset.css"
import "./globals/colors.css"
import "./globals/boiler-plate.css"
import "./media-query/media.css"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main/>
    <Testimonials/>
    <Gallery/>
    <Footer/>
  </React.StrictMode>
);


