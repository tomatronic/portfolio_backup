import React, { useState, useEffect, useRef } from 'react';

const DotMatrix = ({ rows, columns, dotSize, gapSize }) => {
  const [dots, setDots] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [containerPosition, setContainerPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const initialDots = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const baseOpacity = Math.random() * 0.4;
        initialDots.push(baseOpacity);
      }
    }
    setDots(initialDots);

    // Set container position
    const containerRect = containerRef.current.getBoundingClientRect();
    setContainerPosition({
      left: containerRect.left + window.scrollX,
      top: containerRect.top + window.scrollY,
    });
  }, [rows, columns]);

  const calculateDistance = (dotX, dotY, mouseX, mouseY) => {
    const deltaX = dotX - mouseX;
    const deltaY = dotY - mouseY;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY) - dotSize;
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };

  const createDots = (mouseX, mouseY) => {
    const newDots = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const dotX = col * (dotSize * 2 + gapSize) + dotSize + gapSize;
        const dotY = row * (dotSize * 2 + gapSize) + dotSize + gapSize;

        const distance = calculateDistance(
          dotX + containerPosition.left - 600,
          dotY + containerPosition.top,
          mouseX,
          mouseY
        );
        const isInfluenceRadius = distance < 24;
        const baseOpacity = dots[row * columns + col];
        const opacity = isInfluenceRadius ? 0.4 : baseOpacity;

        newDots.push(
          <circle
            key={`${row}-${col}`}
            cx={dotX + containerPosition.left}
            cy={dotY + containerPosition.top}
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
    return newDots;
  };


  return (
    <div
      id="dot-container"
      ref={containerRef}
      style={{
        position: 'absolute',
        width: '680px',
        maxWidth: '100%',              
        height: '200%',
        top: '-180px',
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
