import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NavigationBar from './pages/NavigationBar';
import './App.css';

const AppRouter = () => {
  return (
    <Router>
      <NavigationBar>
        <Redirect from="/" to="/dashboard" />
        <Route path="/dashboard" exact component={Dashboard} />
      </NavigationBar>
    </Router>
  );
}

export default AppRouter;
