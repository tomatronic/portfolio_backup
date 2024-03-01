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
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY) - dotSize;
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };

  const createDots = () => {
    const container = containerRef.current;
    if (!container) return [];

    const containerRect = container.getBoundingClientRect();

    const newDots = [];

    // Calculate the vertical center of the parent div
    const containerCenterY = containerRect.height / 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const dotX = col * (dotSize * 2 + gapSize) + dotSize + gapSize;
        const dotY = row * (dotSize * 2 + gapSize) + dotSize + gapSize + containerRect.top + window.scrollY;

        const distance = calculateDistance(dotX, dotY, mousePosition.x, mousePosition.y);
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
              transition: `opacity 0.2s ease-in ${isInfluenceRadius ? '1s' : '2s'} ease-out`,
              filter: isInfluenceRadius ? 'url(#glow)' : 'none', // Apply filter conditionally
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
      style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      onMouseMove={handleMouseMove}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feFlood result="flood" floodColor="#8a3df5" />
            <feComposite in="flood" in2="SourceGraphic" operator="in" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="1" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode />
            </feMerge>
          </filter>
        </defs>
        {createDots()}
      </svg>
    </div>
  );
};

export default DotMatrix;
