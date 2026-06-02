import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="f-logo">SO<span>LE</span></div>
            <p className="f-desc">Zapatería premium en Ecuador. Originales, con garantía y envío rápido desde 2018.</p>
          </div>
          <div className="f-col">
            <h4>Productos</h4>
            <ul>
              <li><a href="#productos">Deportivos</a></li>
              <li><a href="#productos">Casuales</a></li>
              <li><a href="#productos">Elegantes</a></li>
              <li><a href="#productos">Outdoor</a></li>
            </ul>
          </div>
          <div className="f-col">
            <h4>Tienda</h4>
            <ul>
              <li><a href="#marcas">Marcas</a></li>
              <li><a href="#productos">Ofertas</a></li>
              <li><a href="#contacto">Pedidos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="f-col">
            <h4>Ayuda</h4>
            <ul>
              <li><a href="#contacto">Tallas</a></li>
              <li><a href="#contacto">Devoluciones</a></li>
              <li><a href="#contacto">Envíos</a></li>
              <li><a href="#contacto">Garantía</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} SOLE. Todos los derechos reservados.</span>
          <span className="f-badge">⚛ REACT</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
