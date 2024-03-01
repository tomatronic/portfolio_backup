import React, { useState, useEffect, useRef } from 'react';

const DotMatrix = ({ rows, columns, dotSize, gapSize }) => {
  const [dots, setDots] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const initialDots = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const baseOpacity = Math.random() * 0.2;
        initialDots.push(baseOpacity);
      }
    }
    setDots(initialDots);
  }, [rows, columns]);

const calculateDistance = (dotX, dotY, mouseX, mouseY) => {
  const deltaX = dotX - mouseX;
  const deltaY = dotY - mouseY;
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY) - 50; // Subtract dotSize + 50
};

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };

  useEffect(() => {
    console.log('Mouse Position:', mousePosition.x, mousePosition.y);
  }, [mousePosition.x, mousePosition.y]);

  const createDots = (mouseX, mouseY) => {
    const container = containerRef.current;
    if (!container) return [];
  
    const containerRect = container.getBoundingClientRect();
    const newDots = [];
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const dotX = col * (dotSize * 2 + gapSize) + dotSize + gapSize;
        const dotY = row * (dotSize * 2 + gapSize) + dotSize + gapSize;
        const containerX = containerRect.left;
        const containerY = containerRect.top;
  
        const distance = calculateDistance(dotX + containerX, dotY + containerY, mouseX, mouseY);
        const isInfluenceRadius = distance < 24;
        const baseOpacity = dots[row * columns + col];
        const opacity = isInfluenceRadius ? 0.5 : baseOpacity;
  
        newDots.push(
          <circle
            key={`${row}-${col}`}
            cx={dotX + containerX}
            cy={dotY + containerY}
            r={dotSize}
            fill="#273959"
            style={{
              opacity,
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
      ref={containerRef}
      style={{ position: 'absolute', width: '100%', height: '200%', top: '-50%' }}
      onMouseMove={handleMouseMove}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
        {createDots(mousePosition.x, mousePosition.y)}
      </svg>
    </div>
  );
};

export default DotMatrix;
