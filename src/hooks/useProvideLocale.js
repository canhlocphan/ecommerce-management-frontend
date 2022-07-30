// libs
import { useEffect, useState } from "react";
// others
import CONSTANTS from "@/constants";

const { VI_VN } = CONSTANTS.LOCALE;

const useProvideLocale = () => {
  const language = localStorage.getItem("language")
    ? JSON.parse(localStorage.getItem("language"))
    : VI_VN;
  const [locale, setLocale] = useState(language);

  useEffect(() => {
    if (locale) return;
    setLocale(VI_VN);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    locale: locale || VI_VN,
    setLocale,
  };
};

export default useProvideLocale;
