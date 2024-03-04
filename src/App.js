import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./dashboard/index";
import HomePage from "./homepage";
import NotFound from "./notFound";
import Register from "./dashboard/register";
import Login from "./dashboard/login";
import Sidebar from "./dashboard/sidebar";
import Home from "./dashboard/Home";
import Customer from "./dashboard/Customer";
import Orders from "./dashboard/Orders";
import Withdraw from "./dashboard/Withdraw";
import Profile from "./dashboard/Profile";
import Header from "./dashboard/header";
import AUTH from "./auth/AUTH";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter basename="/reseller">
        <Dashboard/>
      </BrowserRouter>
      <BrowserRouter basename="/auth/">
        <Routes>
          <Route path="/reseller/login" element={<Login user={"reseller"} />} />
          <Route path="/reseller/register" element={<Register user={"reseller"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
