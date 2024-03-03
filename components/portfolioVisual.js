import React, { useState, useEffect } from 'react';

const DotMatrix = ({ rows, columns, dotSize, gapSize }) => {
  const [dots, setDots] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const calculateDistance = (dotX, dotY, mouseX, mouseY) => {
    const deltaX = dotX - mouseX;
    const deltaY = dotY - mouseY;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };

  const createDots = (mouseX, mouseY) => {
    const newDots = [];
    
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      
      // Calculate influence radius offset based on cursor position
      const influenceRadiusOffsetPercentage = 10; // You can adjust this value as needed
      const cursorPercentage = (mouseX / screenWidth) * 100;
      const offset = (screenWidth * influenceRadiusOffsetPercentage) / 100;
      const influenceRadiusOffset = (cursorPercentage * offset) / 100;
  
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          const dotX = col * (dotSize * 2 + gapSize) + dotSize + gapSize;
          const dotY = row * (dotSize * 2 + gapSize) + dotSize + gapSize;
  
          // Calculate distance with influence radius offset
          const distance = calculateDistance(
            dotX,
            dotY,
            mouseX - influenceRadiusOffset,
            mouseY
          );
          const isInfluenceRadius = distance < 24;
          const baseOpacity = dots[row * columns + col];
          const opacity = isInfluenceRadius ? 0.4 : baseOpacity;
  
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
                filter: isInfluenceRadius ? `drop-shadow(5px 5px 5px red)` : 'none',
              }}
            />
          );
        }
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
        WebkitMaskImage: 'radial-gradient(circle at center, white 0, transparent 45%)'
      }}
      onMouseMove={handleMouseMove}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
        {createDots(mousePosition.x, mousePosition.y)}
      </svg>
    </div>
  );
};

export default DotMatrix;
