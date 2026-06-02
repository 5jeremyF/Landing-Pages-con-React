import React from 'react';

const testimonials = [
  { tstars: '★★★★★', ttext: '"Pedí los Air Rush Pro un lunes y llegaron el martes. La calidad es brutal, completamente originales."', tname: 'Carlos V.', trole: 'Cliente frecuente', av: 'CV', avc: 'tav1' },
  { tstars: '★★★★★', ttext: '"Los uso en el gym todos los días. Aguantan todo y siguen como nuevos después de 3 meses de uso intenso."', tname: 'María P.', trole: 'Atleta', av: 'MP', avc: 'tav2' },
  { tstars: '★★★★★', ttext: '"Compré los Peak Trekker para una ruta en el Cotopaxi. Increíble agarre y comodidad en terrenos difíciles."', tname: 'Luis R.', trole: 'Senderista', av: 'LR', avc: 'tav3' },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <div className="tag">Reseñas</div>
            <h2>LO QUE DICEN<br />NUESTROS CLIENTES</h2>
          </div>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="tcard" key={i}>
              <div className="tstars">{t.tstars}</div>
              <p className="ttext">{t.ttext}</p>
              <div className="tauthor">
                <div className={`tav ${t.avc}`}>{t.av}</div>
                <div>
                  <div className="tname">{t.tname}</div>
                  <div className="trole">{t.trole}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
