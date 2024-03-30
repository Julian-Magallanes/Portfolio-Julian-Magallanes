import React from 'react';

const LineChart = ({ data, goals }) => {
  // Calcula el máximo valor de x e y para normalizar los datos
  const maxX = Math.max(...data.map(point => point.x));
  const maxY = Math.max(...data.map(point => point.y));

  // Función para mapear los datos a puntos en el SVG
  const linePoints = data.map(point => {
    const x = (point.x / maxX) * 100; // Usa porcentajes basados en el valor máximo de x
    const y = 100 - (point.y / maxY) * 100; // Usa porcentajes basados en el valor máximo de y
    return `${x},${y}`;
  }).join(' ');

  // Función para mapear las metas a círculos y texto en el SVG
  const goalElements = goals.map((goal, index) => {
    const x = (goal.x / maxX) * 100;
    const y = 100 - (goal.y / maxY) * 100;
    return (
      <g key={index}>
        <circle cx={`${x}%`} cy={`${y}%`} r="1" fill="#D5FF40" />
        <text x={`${x + 1}%`} y={`${y}%`} fill="black">{goal.label}</text>
      </g>
    );
  });

  return (
    <div className="line-chart-container">
      <svg 
        className="line-chart-svg"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <polyline
          points={linePoints}
          stroke="#D5FF40"
          strokeWidth="0.3"
          fill="none"
        />
        {goalElements}
      </svg>
    </div>
  );
};

export default LineChart;