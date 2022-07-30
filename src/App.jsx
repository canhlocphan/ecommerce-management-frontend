// libs
import { Routes, Route } from "react-router-dom";
// components
import ContentContainer from "./components/ContentContainer";
import MainSideMenu from "./components/MainSideMenu";
import CategorieList from "./pages/CategorieList";
import OrderList from "./pages/OrderList";
// others
import "./App.scss";
import "antd/dist/antd.min.css";

const App = () => (
  <div className="app-wrapper">
    <div className="app-wrapper-inner">
      <MainSideMenu />
      <ContentContainer>
        <Routes>
          <Route path="/" element={<CategorieList />} />
          <Route path="/orders-list" element={<OrderList />} />
        </Routes>
      </ContentContainer>
    </div>
  </div>
);

export default App;
