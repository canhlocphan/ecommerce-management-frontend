// libs
import { UnorderedListOutlined, ClusterOutlined } from "@ant-design/icons";
// others
import CONSTANTS from "@/constants";

const { CATEGORIE_LIST, ORDER_LIST } = CONSTANTS.PAGE_NAMES;

const mainSideMenuList = ({ localeDataSource }) => [
  {
    title: localeDataSource[CATEGORIE_LIST],
    icon: <ClusterOutlined />,
    to: "/",
  },
  {
    title: localeDataSource[ORDER_LIST],
    icon: <UnorderedListOutlined />,
    to: "/orders-list",
  },
];

export default mainSideMenuList;
