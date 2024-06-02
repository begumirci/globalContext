import { useReducer } from 'react';
import { GlobalStateContext } from './context';
import { initialState } from './initialState';
import { reducer } from './reducer';

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
