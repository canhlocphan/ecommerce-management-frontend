import messages from "./messages";
import screens from "./screens";
// constants
import CONSTANTS from "@/constants";

const { VI_VN, EN_US } = CONSTANTS.LOCALE;

export default {
  [EN_US]: { ...messages[EN_US], ...screens[EN_US] },
  [VI_VN]: { ...messages[VI_VN], ...screens[VI_VN] },
};
