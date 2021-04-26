import React, { createContext, useContext, useReducer } from 'react';

// Preparing the data layer
export const stateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);

// Hook that allows us to pull information from the data layer
export const useStateValue = () => useContext(stateContext);
