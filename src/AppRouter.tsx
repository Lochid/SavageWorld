import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './pages/dashboard';

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Dashboard} />
    </Router>
  );
}

export default AppRouter;
