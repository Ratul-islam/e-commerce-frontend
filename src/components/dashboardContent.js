import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../dashboard/Home';
import Customer from '../dashboard/Customer';
import Orders from '../dashboard/Orders';
import Withdraw from '../dashboard/Withdraw';
import Profile from '../dashboard/Profile';

const DashboardContent = () => {
  return (
    <div className="content-area">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/customers/" element={<Customer/>} />
        <Route path="/orders/" element={<Orders/>} />
        <Route path="/withdraw/" element={<Withdraw/>} />
        <Route path="/profile/" element={<Profile/>} />
        <Route component={() => <h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default DashboardContent;
