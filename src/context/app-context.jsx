import React from 'react';

const AppContext = React.createContext();

const AppContextProvider = ({ value, children }) => (
  <AppContext.Provider value={value}>{children}</AppContext.Provider>
);

export default AppContextProvider;

export function useAppContext() {
  return React.useContext(AppContext);
}
