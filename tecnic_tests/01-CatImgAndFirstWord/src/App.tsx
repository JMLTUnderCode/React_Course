import React from 'react';
import { useCatImg } from './hooks/useCatImg';
import { useCatFact } from './hooks/useCatFact';

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { catImage } = useCatImg({ fact });
  
  // Fetch a new fact from the API
  const handleClick = () => {
    refreshFact();
  };

  return (
    <div className="project-cat-word">
      <div className="project-cat-word-info">
        <h1>Cat Image and First Word</h1>
        <p>Welcome to the Cat Image and First Word app!</p>
      </div>

      <button onClick={handleClick}>Next Fact</button>
      <section>
        {fact && 
          <div className="fact-info">
            <h2>Fact Text</h2>
            <span>"{fact}"</span>
          </div>}
        {catImage && <img src={catImage} alt={`Cat img extracted using the first word for '${fact}'`} />}
      </section>
    </div>
  );
};