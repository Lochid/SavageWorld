import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import NavigationBar from './pages/NavigationBar';
import TemplateList from './pages/TemplateList';
import TemplateAdd from './pages/TemplateAdd';
import './App.css';

const AppRouter = () => {
  return (
    <Router>
      <NavigationBar>
        <Redirect from="/" to="/templates" />
        <Route path="/templates" exact component={TemplateList} />
        <Route path="/templates/add" exact component={TemplateAdd} />
      </NavigationBar>
    </Router>
  );
}

export default AppRouter;
