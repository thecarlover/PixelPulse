import React, { useState, useEffect } from 'react';
import Ball from './Ball';

const Plinko = () => {
  const rows = 16; // Number of rows for the triangular pattern
  const bins = ['110x', '41x', '10x', '5x', '3x', '1.5x', '1x', '0.5x', '0.3x', '0.5x', '1x', '1.5x', '3x', '5x', '10x', '41x', '110x'];
  const [ballPosition, setBallPosition] = useState({ x: Math.floor(bins.length / 2), y: -1 }); // Start position above the board
  const [isFalling, setIsFalling] = useState(false);

  // Define a color scale for bins
  const colorScale = ['#f99', '#fa6', '#fb3', '#fc0', '#f90', '#f80', '#f70', '#f60', '#f50', '#f40', '#f30', '#f20', '#f10', '#f00', '#f10', '#f20', '#f30', '#f40', '#f50', '#f60', '#f70', '#f80', '#f90'];

  useEffect(() => {
    if (isFalling) {
      const interval = setInterval(() => {
        setBallPosition((prevPosition) => {
          let nextX = prevPosition.x + (Math.random() > 0.5 ? 1 : -1);
          let nextY = prevPosition.y + 1;

          // Ensure nextX stays within the bounds of the Plinko board
          if (nextX < 0) {
            nextX = 0;
          } else if (nextX >= bins.length) {
            nextX = bins.length - 1;
          }

          // Check if the ball reaches the bottom row
          if (nextY >= rows) {
            setIsFalling(false);
            clearInterval(interval);
            nextY = rows - 1; // Ensure the ball stops at the bottom peg
            dissolveInBin(nextX); // Dissolve the ball into the bin
          }

          // Check if there's a peg at the current position
          if (nextY > 0 && nextY < rows) {
            if (bins[nextX].includes('x')) {
              // Reverse direction
              nextX = prevPosition.x;
            }
          }

          return { x: nextX, y: nextY };
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isFalling, bins.length, rows]);

  const startFalling = () => {
    setBallPosition({ x: Math.floor(bins.length / 2), y: -1 }); // Start position above the board
    setIsFalling(true);
  };

  const dissolveInBin = (x) => {
    console.log('Dissolve in bin:', bins[x]);
    // Implement logic to dissolve the ball into the bin
  };

  return (
    <div className="bg-gray-900 min-h-screen py-20 flex flex-col items-center relative">
      <div className="text-white mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Plinko Game</h1>
        <button
          onClick={startFalling}
          className={`mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 ${isFalling ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isFalling}
        >
          Drop Ball
        </button>
      </div>
      <div className="relative w-full max-w-screen-xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="relative flex flex-col items-center space-y-3">
          {[...Array(rows)].map((_, rowIndex) => (
            <div key={rowIndex} className="flex space-x-6"> {/* Increased gap between pegs */}
              {[...Array(rowIndex + 3)].map((_, colIndex) => (
                <div
                  key={colIndex}
                  className={`w-2 h-2 bg-white rounded-full`}
                ></div> // smaller pegs
              ))}
            </div>
          ))}
        </div>
        {isFalling && <Ball position={ballPosition} />}
      </div>
      <div className="flex justify-between mt-4 max-w-screen-xl">
        {bins.map((bin, index) => (
          <div key={index} className="w-9 h-10 p-2 gap-6 flex justify-center items-center text-white text-xs" style={{backgroundColor: colorScale[index]}}>
            {bin}
          </div>
        ))}
      </div>
    </div>
 
);
};

export default Plinko;
