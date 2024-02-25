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

function App() {
  return (
    <BrowserRouter>
    <Dashboard>
    <Sidebar/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Dashboard>
    <Routes>
      <Route to="hello" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
