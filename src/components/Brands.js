import React from 'react';

const brands = [
  { bi: '⚡', bn: 'NIKE' },
  { bi: '🌟', bn: 'ADIDAS' },
  { bi: '🔥', bn: 'PUMA' },
  { bi: '💎', bn: 'NEW BALANCE' },
  { bi: '🏆', bn: 'CONVERSE' },
];

function Brands() {
  return (
    <section className="brands-section" id="marcas">
      <div className="container">
        <div className="brands-title">NUESTRAS MARCAS</div>
        <div className="brands-grid">
          {brands.map((b, i) => (
            <div className="brand-box" key={i}>
              <span className="bi">{b.bi}</span>
              <div className="bn">{b.bn}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
