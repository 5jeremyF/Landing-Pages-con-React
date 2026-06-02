import React, { useState } from 'react';

function validate(fields) {
  const e = {};
  if (!fields.nombre.trim()) e.nombre = 'El nombre es obligatorio';
  else if (fields.nombre.trim().length < 3) e.nombre = 'Mínimo 3 caracteres';
  if (!fields.apellido.trim()) e.apellido = 'El apellido es obligatorio';
  else if (fields.apellido.trim().length < 2) e.apellido = 'Mínimo 2 caracteres';
  if (!fields.email.trim()) e.email = 'El correo es obligatorio';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Correo inválido';
  if (!fields.telefono.trim()) e.telefono = 'El teléfono es obligatorio';
  else if (!/^\+?[\d\s\-()]{7,15}$/.test(fields.telefono)) e.telefono = 'Número inválido';
  if (!fields.talla) e.talla = 'Selecciona tu talla';
  if (!fields.mensaje.trim()) e.mensaje = 'El mensaje es obligatorio';
  else if (fields.mensaje.trim().length < 20) e.mensaje = 'Mínimo 20 caracteres';
  return e;
}

const initial = { nombre: '', apellido: '', email: '', telefono: '', talla: '', mensaje: '' };

function ContactForm() {
  const [fields, setFields] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...fields, [name]: value };
    setFields(next);
    if (touched[name]) setErrors(validate(next));
  };
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(p => ({ ...p, [name]: true }));
    setErrors(validate(fields));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const all = Object.keys(initial).reduce((a, k) => ({ ...a, [k]: true }), {});
    setTouched(all);
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };
  const gc = (n) => `fg${touched[n] && errors[n] ? ' error' : ''}`;

  if (submitted) {
    return (
      <div className="form-box">
        <div className="success-box">
          <div className="s-icon">✅</div>
          <h3>PEDIDO RECIBIDO</h3>
          <p>Gracias, <strong>{fields.nombre}</strong>. Te contactamos pronto.</p>
          <button className="btn-send" style={{ marginTop: 24, width: 'auto', padding: '14px 32px' }}
            onClick={() => { setFields(initial); setErrors({}); setTouched({}); setSubmitted(false); }}>
            NUEVO PEDIDO
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-box">
      <div className="form-box-title">TU PEDIDO</div>
      <form onSubmit={handleSubmit} noValidate>

        {/* ╔ BLOQUE 1 — NOMBRE + APELLIDO ╗ */}
        <div className="frow">
          <div className={gc('nombre')}>
            <label>Nombre *</label>
            <input name="nombre" type="text" placeholder="Juan"
              value={fields.nombre} onChange={handleChange} onBlur={handleBlur} />
            {touched.nombre && errors.nombre && <div className="err">↑ {errors.nombre}</div>}
          </div>
          <div className={gc('apellido')}>
            <label>Apellido *</label>
            <input name="apellido" type="text" placeholder="Pérez"
              value={fields.apellido} onChange={handleChange} onBlur={handleBlur} />
            {touched.apellido && errors.apellido && <div className="err">↑ {errors.apellido}</div>}
          </div>
        </div>
        {/* ╝ FIN BLOQUE 1 */}

        {/* ╔ BLOQUE 2 — EMAIL + TELÉFONO ╗ */}
        <div className="frow">
          <div className={gc('email')}>
            <label>Correo *</label>
            <input name="email" type="email" placeholder="juan@ejemplo.com"
              value={fields.email} onChange={handleChange} onBlur={handleBlur} />
            {touched.email && errors.email && <div className="err">↑ {errors.email}</div>}
          </div>
          <div className={gc('telefono')}>
            <label>Teléfono *</label>
            <input name="telefono" type="tel" placeholder="+593 99 123 4567"
              value={fields.telefono} onChange={handleChange} onBlur={handleBlur} />
            {touched.telefono && errors.telefono && <div className="err">↑ {errors.telefono}</div>}
          </div>
        </div>
        {/* ╝ FIN BLOQUE 2 */}

        {/* ╔ BLOQUE 3 — TALLA ╗ */}
        <div className={gc('talla')}>
          <label>Talla *</label>
          <select name="talla" value={fields.talla} onChange={handleChange} onBlur={handleBlur}>
            <option value="">— Selecciona tu talla —</option>
            {['35','36','37','38','39','40','41','42','43','44','45'].map(t => (
              <option key={t} value={t}>Talla {t}</option>
            ))}
          </select>
          {touched.talla && errors.talla && <div className="err">↑ {errors.talla}</div>}
        </div>
        {/* ╝ FIN BLOQUE 3 */}

        {/* ╔ BLOQUE 4 — MENSAJE ╗ */}
        <div className={gc('mensaje')}>
          <label>Modelo y detalles *</label>
          <textarea name="mensaje" rows={4}
            placeholder="Ej: Quiero el Air Rush Pro en negro, talla 42, para uso diario..."
            value={fields.mensaje} onChange={handleChange} onBlur={handleBlur} />
          {touched.mensaje && errors.mensaje && <div className="err">↑ {errors.mensaje}</div>}
        </div>
        {/* ╝ FIN BLOQUE 4 */}

        <button type="submit" className="btn-send" disabled={loading}>
          {loading ? 'PROCESANDO...' : 'ENVIAR PEDIDO →'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
