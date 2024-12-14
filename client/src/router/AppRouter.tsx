import React from 'react';
import { publicRouter } from './routers';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {publicRouter.map((item) => (
          <Route path={item.path} element={<item.element />} key={item.path} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
