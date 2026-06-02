import React from 'react';

const items = ['Nueva Colección', '•', 'Envío Gratis', '•', 'Calzado Premium', '•', 'Descuentos Exclusivos', '•', 'Nueva Colección', '•', 'Envío Gratis', '•', 'Calzado Premium', '•', 'Descuentos Exclusivos', '•'];

function Marquee() {
  return (
    <div className="marquee-bar">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className={`marquee-item${item === '•' ? ' marquee-dot' : ''}`}>
            {item}
          </span>
        ))}
        {items.map((item, i) => (
          <span key={`b-${i}`} className={`marquee-item${item === '•' ? ' marquee-dot' : ''}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
