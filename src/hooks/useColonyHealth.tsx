import { useState, useEffect } from 'react';
import { useResource } from '../context/ResourceContext';

const useColonyHealth = (initialHealth = 100) => {
  const [health, setHealth] = useState(initialHealth);
  const { food, addFood } = useResource();

  useEffect(() => {
    const interval = setInterval(() => {
      if (health > 0) {
        setHealth((prev) => prev - 1);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [health]);

  const feedBees = () => {
    if (food >= 10) {
      setHealth((prev) => prev + 10);
      addFood(-10);
    }
  };

  return { health, feedBees };
};

export default useColonyHealth;
