import { initialState } from './initialState';

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'changeFullName':
      return {
        ...state,
        name: payload.name,
        surname: payload.surname,
      };
    case 'reset':
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
