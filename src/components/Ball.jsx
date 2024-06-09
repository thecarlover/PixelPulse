import React from 'react';

const Ball = ({ position }) => {
  // Calculate the position of the ball based on the row and column index
  const ballStyle = {
    position: 'absolute',
    left: `${(position.x + 3) * (100 / (position.y + 4))}%`, // Adjust the position based on the parent container's width
    bottom: `${(position.y + 1) * 5}%`, // Adjust the position to be relative to the board
    width: '15px',
    height: '15px',
    backgroundColor: 'red', // Orange color
    borderRadius: '50%',
    zIndex: 2, // Ensure the ball is above other elements
  };

  return <div style={ballStyle}></div>;
};

export default Ball;
