import React from 'react';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section className="form-section" id="contacto">
      <div className="container">
        <div className="form-layout">
          <div className="form-left">
            <h2>HAZ TU<br />PEDIDO<br />HOY</h2>
            <p>Escríbenos con el modelo, talla y color que deseas. Respondemos en menos de 2 horas con disponibilidad y precio final.</p>
            <div className="info-list">
              <div className="info-row">
                <span className="icon">📧</span>
                <div><div className="label">Correo</div><div className="val">pedidos@sole.ec</div></div>
              </div>
              <div className="info-row">
                <span className="icon">📱</span>
                <div><div className="label">WhatsApp</div><div className="val">+593 98 000 1234</div></div>
              </div>
              <div className="info-row">
                <span className="icon">📍</span>
                <div><div className="label">Tienda física</div><div className="val">Guayaquil, Ecuador 🇪🇨</div></div>
              </div>
              <div className="info-row">
                <span className="icon">🚚</span>
                <div><div className="label">Envío</div><div className="val">Gratis en compras +$60</div></div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
