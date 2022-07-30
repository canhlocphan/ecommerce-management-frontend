// libs
import { useEffect, useState } from "react";
// others
import CONSTANTS from "@/constants";

const { EN_US } = CONSTANTS.LOCALE;

const useProvideLocale = () => {
  const language = localStorage.getItem("language")
    ? JSON.parse(localStorage.getItem("language"))
    : EN_US;
  const [locale, setLocale] = useState(language);

  useEffect(() => {
    if (locale) return;
    setLocale(EN_US);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    locale: locale || EN_US,
    setLocale,
  };
};

export default useProvideLocale;
