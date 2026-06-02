import React from 'react';

const stats = [
  { n: '8K', plus: '+', l: 'Pares vendidos' },
  { n: '98',  plus: '%', l: 'Satisfacción' },
  { n: '60',  plus: '+', l: 'Modelos' },
  { n: '24',  plus: 'H', l: 'Envío express' },
];

function Stats() {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div className="stat-cell" key={i}>
            <div className="n">{s.n}<span>{s.plus}</span></div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
