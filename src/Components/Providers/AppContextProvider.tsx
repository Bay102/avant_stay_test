import { createContext } from 'react';
import { AppContextTypes } from '../../types';

export const AppContext = createContext({} as AppContextTypes);

export const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
