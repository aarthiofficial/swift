import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
