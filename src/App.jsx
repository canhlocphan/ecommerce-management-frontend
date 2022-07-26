// components
import MainSideMenu from "./components/MainSideMenu";
import OrdersList from "./pages/OrdersList";
// others
import "./App.scss";
import "antd/dist/antd.less";

const App = () => (
  <div className="app-wrapper">
    <div className="app-wrapper-inner">
      <MainSideMenu />
      <OrdersList />
    </div>
  </div>
);

export default App;
