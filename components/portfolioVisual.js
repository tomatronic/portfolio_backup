// DotMatrix.js
import React, { useState, useEffect } from 'react';

const DotMatrix = ({ rows, columns, dotSize, gapSize }) => {
  const [dots, setDots] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY) - dotSize; // Subtract dotSize to consider the center
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };

  useEffect(() => {
    console.log("Mouse Position:", mousePosition.x, mousePosition.y);
  }, [mousePosition.x, mousePosition.y]);

  const createDots = (mouseX, mouseY) => {
    const container = document.getElementById('dot-container'); // Add an ID to your container
    const containerRect = container.getBoundingClientRect();
  
    const newDots = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const dotX = col * (dotSize * 2 + gapSize) + dotSize + gapSize + containerRect.left;
        const dotY = row * (dotSize * 2 + gapSize) + dotSize + gapSize + containerRect.top;
        console.log('Dot Position:', dotX, dotY);
        const distance = calculateDistance(dotX, dotY, mouseX, mouseY);
        const isInfluenceRadius = distance < 24;
        const baseOpacity = dots[row * columns + col];
        const opacity = isInfluenceRadius ? 0.5 : baseOpacity;
  
        newDots.push(
          <circle
            key={`${row}-${col}`}
            cx={dotX}
            cy={dotY}
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
