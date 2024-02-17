import React from 'react';
import { useParams } from 'react-router-dom';
import './GamePage.css'; // Make sure to create a corresponding CSS file

const GamePage = () => {
  let { id } = useParams(); // Assuming you're using the game's id in the URL

  return (
    <div className="gamePage">
      <h2>Game ID: {id}</h2>
      {/* Fetch and display game details based on the id */}
    </div>
  );
};

export default GamePage;
