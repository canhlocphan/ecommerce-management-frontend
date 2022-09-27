// libs
import { useContext, useMemo } from "react";
// hooks
import useProvideLocale from "./useProvideLocale";
// contexts
import LocaleContext from "@/contexts";
// others
import locales from "@/locales";

/**
 * ProvideLocale
 * @param {Object} props
 * @param {any} props.value - for unit test
 * @param {React.Node} props.children
 */
export const ProvideLocale = ({ value, children }) => {
  const { locale, setLocale } = useProvideLocale();

  return (
    <LocaleContext.Provider
      value={
        value ||
        useMemo(
          () => ({
            locale,
            setLocale,
            localeDataSource: locales[locale],
          }),
          [locale, setLocale]
        )
      }
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocaleContext = () => useContext(LocaleContext);
