import React, { useState, useEffect } from 'react';

const DotMatrix = ({ rows, columns, dotSize, gapSize }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Randomize opacity for each dot once on page load
    const initialDots = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const baseOpacity = Math.random() * 0.2; // Cap opacity at 20%
        initialDots.push(baseOpacity);
      }
    }
    setDots(initialDots);
  }, [rows, columns]);

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };

  const calculateDistance = (dotX, dotY) => {
    const container = typeof document !== 'undefined' && document.getElementById('dot-container');

    if (!container) {
      return 0;
    }

    const containerRect = container.getBoundingClientRect();
    const mouseX = mousePosition.x - containerRect.left;
    const mouseY = mousePosition.y - containerRect.top;

    const deltaX = dotX - mouseX;
    const deltaY = dotY - mouseY;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const createDots = () => {
    const newDots = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const dotX = col * (dotSize * 2 + gapSize) + dotSize + gapSize;
        const dotY = row * (dotSize * 2 + gapSize) + dotSize + gapSize;
        const distance = calculateDistance(dotX, dotY);
        const isInfluenceRadius = distance < 24;
        const baseOpacity = dots[row * columns + col];
        const opacity = isInfluenceRadius ? 1 : baseOpacity;

        newDots.push(
          <circle
            key={`${row}-${col}`}
            cx={dotX}
            cy={dotY}
            r={dotSize}
            fill="#273959" // Change the color if needed
            style={{
              opacity,
              transition: 'opacity 0.3s ease-in-out',
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
      style={{ position: 'relative' }}
      onMouseMove={handleMouseMove}
    >
      <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
        {createDots()}
      </svg>
    </div>
  );
};

export default DotMatrix;
