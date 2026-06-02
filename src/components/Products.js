import React from 'react';

const products = [
  { emoji: '👟', badge: 'TOP SELLER', name: 'Air Rush Pro', brand: 'SOLE Sport', price: '$89.99' },
  { emoji: '👞', badge: 'NEW',        name: 'Street Edge',  brand: 'SOLE Urban', price: '$74.99' },
  { emoji: '🥾', badge: 'OUTDOOR',   name: 'Peak Trekker', brand: 'SOLE Wild',  price: '$119.99' },
  { emoji: '👠', badge: 'LUXURY',    name: 'Vogue Heel',   brand: 'SOLE Elite', price: '$95.99' },
  { emoji: '🩴', badge: 'SUMMER',    name: 'Wave Slide',   brand: 'SOLE Beach', price: '$34.99' },
  { emoji: '🥿', badge: 'CLASSIC',   name: 'Easy Mule',    brand: 'SOLE Soft',  price: '$59.99' },
];

function Products() {
  return (
    <section className="products-section" id="productos">
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <div className="tag">Catálogo</div>
            <h2>LOS MÁS<br />VENDIDOS</h2>
          </div>
          <a href="#contacto" className="see-all">Ver todo →</a>
        </div>
        <div className="products-grid">
          {products.map((p, i) => (
            <div className="product-card" key={i}>
              <span className="product-badge">{p.badge}</span>
              <div className="product-emoji-wrap">{p.emoji}</div>
              <div className="product-details">
                <div className="product-brand">{p.brand}</div>
                <div className="product-name">{p.name}</div>
                <div className="product-bottom">
                  <div className="product-price">{p.price}</div>
                  <button className="btn-buy">Agregar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
