import React from 'react';

const ResetButton = ({ resetGame }) => {
  return (
    <center><button className="reset-button" onClick={resetGame}>
      Reset Game
    </button></center>
  );
};

export default ResetButton;
