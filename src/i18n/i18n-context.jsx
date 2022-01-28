/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';

const LocaleContext = React.createContext();

const I18nProvider = ({ locale, children }) => <LocaleContext.Provider value={{ locale }}>{children}</LocaleContext.Provider>;

export function useLocale() {
  return React.useContext(LocaleContext);
}

export default I18nProvider;
