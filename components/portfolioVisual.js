import React, { useState, useEffect, useRef } from 'react';

const DotMatrix = ({ rows, columns, dotSize, gapSize }) => {
  const [dots, setDots] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

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
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY) - dotSize;
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };

  const createDots = () => {
    const container = containerRef.current;
    if (!container) return [];
  
    const containerRect = container.getBoundingClientRect();
    const containerX = containerRect.left;
    const containerY = containerRect.top + window.scrollY;
  
    const newDots = [];
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const dotX = col * (dotSize * 2 + gapSize) + dotSize + gapSize;
        const dotY = row * (dotSize * 2 + gapSize) + dotSize + gapSize;
  
        const distance = calculateDistance(
          dotX + containerX,
          dotY + containerY,
          mousePosition.x,
          mousePosition.y
        );
        const isInfluenceRadius = distance < 24;
        const baseOpacity = dots[row * columns + col];
        const opacity = isInfluenceRadius ? 0.8 : baseOpacity;
        const fill = isInfluenceRadius ? "#6366f1" : "#273959";
  
        newDots.push(
          <circle
            key={`${row}-${col}`}
            cx={dotX}
            cy={dotY}
            r={dotSize}
            fill={fill}
            style={{
              opacity,
              transition: `opacity 0.2s ease-in ${isInfluenceRadius ? '0s' : '2s'}, fill 0.2s ease-in ${isInfluenceRadius ? '0s' : '2s'}`, // Adjusted transition property
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
      className="top-[-70px] md:top-[-120px]"
      style={{
        position: 'absolute',
        width: '100%',
        maxWidth: '690px',
        height: '200%',        
        left: '0',
        right: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        WebkitMaskImage: 'radial-gradient(circle at center, white 0, transparent 65%)',
      }}
      onMouseMove={handleMouseMove}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
        {createDots()}
      </svg>
    </div>
  );
};

export default DotMatrix;
