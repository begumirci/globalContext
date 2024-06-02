import { createContext, useContext } from 'react';
import { initialState } from './initialState';

export const GlobalStateContext = createContext({
  state: initialState,
  dispatch: () => {},
});

export default function useGlobalState() {
  return useContext(GlobalStateContext);
}
