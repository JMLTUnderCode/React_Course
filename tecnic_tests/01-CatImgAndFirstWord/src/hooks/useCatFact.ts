import React, { useEffect, useState } from 'react';
import { getRandomFact } from '../services/Facts';

export function useCatFact(): { fact: string, refreshFact: () => void } {
  const [fact, setFact] = useState('');

  // Fetch a random fact using the API
  const refreshFact = () => {
	getRandomFact().then(newFact => setFact(newFact));
  };
  
  // Fetch a random fact on component mount
  useEffect(refreshFact, []);

  return { fact, refreshFact };
}