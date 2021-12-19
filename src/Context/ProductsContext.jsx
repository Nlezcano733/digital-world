import React, { useState, useEffect } from 'react';
import { InitialState } from './InitialState';
import { database } from '../Firebase/Crud';

export const ProductsContext = React.createContext(InitialState);

export const ProductsProvider = (props) => {

  const [hardware, setHardware] = useState(InitialState.hardware);
  const [components, setComponents] = useState(InitialState.components);
  const [software, setSoftware] = useState(InitialState.software);
  const [games, setGames] = useState(InitialState.games);

  function getData() {
    database.list("item").then((snapshot) => {
      const response = snapshot.docs.map((t) => ({ ...t.data(), id: t.id }));
      setHardware(response?.filter(d => d.type === "hardware") || []);
      setComponents(response?.filter(d => d.type === "component") || []);
      setSoftware(response?.filter(d => d.type === "software") || []);
      setGames(response?.filter(d => d.type === "game") || []);
    });
  }

  useEffect(() => getData(), []);

  const data = {
    hardware: hardware,
    components: components,
    software: software,
    games: games
  };

  return (
    <ProductsContext.Provider value={ { ...data } }>
      { props.children }
    </ProductsContext.Provider>
  );
};