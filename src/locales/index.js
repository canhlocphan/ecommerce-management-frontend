import messages from "./messages";
import pages from "./pages";
import pageNames from "./pageNames";
// constants
import CONSTANTS from "@/constants";

const { VI_VN, EN_US } = CONSTANTS.LOCALE;

export default {
  [EN_US]: { ...messages[EN_US], ...pages[EN_US], ...pageNames[EN_US] },
  [VI_VN]: { ...messages[VI_VN], ...pages[VI_VN] },
  ...pageNames[VI_VN],
};
