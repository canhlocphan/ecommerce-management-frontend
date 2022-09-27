// libs
import { Routes, Route } from "react-router-dom";
// components
import MainSideMenu from "./components/MainSideMenu";
import CategorieList from "./pages/CategorieList";
import OrderList from "./pages/OrderList";
import OrderDetails from "./pages/OrderDetails";
// others
import "./App.scss";
import "antd/dist/antd.min.css";

const App = () => (
  <div className="app-wrapper">
    <div className="app-wrapper-inner">
      <MainSideMenu />
      <Routes>
        <Route path="/" element={<CategorieList />} />
        <Route path="/orders-list" element={<OrderList />} />
        <Route path="/orders-list/:id" element={<OrderDetails />} />
      </Routes>
    </div>
  </div>
);

export default App;
