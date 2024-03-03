import React, { useState, useEffect } from 'react';

const DotMatrix = ({ rows, columns, dotSize, gapSize }) => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const initialDots = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const baseOpacity = Math.random() * 0.4;
        initialDots.push(baseOpacity);
      }
    }
    setDots(initialDots);
  }, [rows, columns]);

  const createDots = () => {
    const newDots = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const dotX = col * (dotSize * 2 + gapSize) + dotSize + gapSize;
        const dotY = row * (dotSize * 2 + gapSize) + dotSize + gapSize;

        const baseOpacity = dots[row * columns + col];

        newDots.push(
          <circle
            key={`${row}-${col}`}
            cx={dotX}
            cy={dotY}
            r={dotSize}
            fill="#273959"
            style={{
              opacity: baseOpacity,
              transition: 'opacity 0.1s ease-in 0.5 ease-out',
            }}
          />
        );
      }
    }
    return newDots;
  };

  return (
    <div
      id="dot-container"
      style={{
        position: 'absolute',
        width: '100%',
        maxWidth: '690px',
        height: '200%',
        top: '-120px',
        left: '0',
        right: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        WebkitMaskImage: 'radial-gradient(circle at center, white 0, transparent 45%)',
      }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
        {createDots()}
      </svg>
    </div>
  );
};

export default DotMatrix;
