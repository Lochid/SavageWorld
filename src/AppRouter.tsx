import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import NavigationBar from './pages/NavigationBar';
import TemplateList from './pages/TemplateList';
import TemplateAdd from './pages/TemplateAdd';
import TemplateEdit from './pages/TemplateEdit';
import CharacterSheetList from './pages/CharacterSheetList';
import './App.css';

const AppRouter = () => {
  return (
    <Router>
      <NavigationBar>
        <Redirect from="/" to="/templates" />
        <Route path="/templates" exact component={TemplateList} />
        <Route path="/templates/add" exact component={TemplateAdd} />
        <Route path="/templates/edit/:id" exact component={TemplateEdit} />
        <Route path="/charsheets" exact component={CharacterSheetList} />
      </NavigationBar>
    </Router>
  );
}

export default AppRouter;
