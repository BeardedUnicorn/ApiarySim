import React, { createContext, useContext, useState, ReactNode } from 'react';

type ResourceContextType = {
  food: number;
  totalHoney: number;
  addFood: (amount: number) => void;
  addHoney: (amount: number) => void;
};

const ResourceContext = createContext<ResourceContextType | undefined>(
  undefined,
);

type ResourceProviderProps = {
  children: ReactNode;
};

export const ResourceProvider: React.FC<ResourceProviderProps> = ({
  children,
}) => {
  const [food, setFood] = useState(100);
  const [totalHoney, setTotalHoney] = useState(0);

  const addFood = (amount: number) => setFood(food + amount);
  const addHoney = (amount: number) => setTotalHoney(totalHoney + amount);

  return (
    <ResourceContext.Provider value={{ food, totalHoney, addFood, addHoney }}>
      {children}
    </ResourceContext.Provider>
  );
};

export const useResource = () => {
  const context = useContext(ResourceContext);
  if (!context) {
    throw new Error('useResource must be used within a ResourceProvider');
  }
  return context;
};
