// libs
import { Routes, Route } from "react-router-dom";
// components
import MainSideMenu from "./components/MainSideMenu";
import OrdersList from "./pages/OrdersList";
// others
import "./App.scss";
import "antd/dist/antd.min.css";

const App = () => (
  <div className="app-wrapper">
    <div className="app-wrapper-inner">
      <MainSideMenu />
      <Routes>
        <Route path="/" element={<OrdersList />} />
        <Route path="/orders-list" element={<h1>VCL</h1>} />
      </Routes>
    </div>
  </div>
);

export default App;
