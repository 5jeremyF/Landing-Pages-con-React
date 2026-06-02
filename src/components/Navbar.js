import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">SOLE</div>
      <div className="nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#marcas">Marcas</a>
        <a href="#contacto" className="nav-cta">Comprar</a>
      </div>
    </nav>
  );
}

export default Navbar;
