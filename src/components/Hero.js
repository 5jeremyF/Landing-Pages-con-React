import React from 'react';

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-left">
        <div className="hero-tag slide-in">
          <div className="hero-tag-line"></div>
          <span>Colección 2025</span>
        </div>
        <h1 className="slide-in delay-1">
          MUEVE<br />EL<br /><span className="red">MUNDO</span>
        </h1>
        <p className="hero-sub slide-in delay-2">
          Calzado diseñado para quienes no se detienen. Cada par es
          una declaración de estilo, rendimiento y actitud.
        </p>
        <div className="hero-buttons slide-in delay-3">
          <a href="#productos" className="btn-main">Ver colección</a>
          <a href="#contacto" className="btn-outline">Hacer pedido</a>
        </div>
      </div>

      <div className="hero-right">
        <span className="hero-new-tag">NEW DROP</span>
        <div className="hero-shoe-big">👟</div>
        <div className="hero-price-tag">
          <div className="from">Desde</div>
          <div className="price">$49.99</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
