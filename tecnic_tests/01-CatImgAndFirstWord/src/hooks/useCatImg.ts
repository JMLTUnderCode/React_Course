import { useEffect, useState } from 'react';

import { getCatImg } from '../services/Cats';

export function useCatImg({ fact }: { fact: string }): { catImage: string } {
  const [catImage, setCatImage] = useState('');
  
  // Fetch a cat image using fact
  useEffect(() => {
    if (!fact) return;
	  getCatImg(fact).then(newCatImage => setCatImage(newCatImage));
  }, [fact]);

  return { catImage };
}