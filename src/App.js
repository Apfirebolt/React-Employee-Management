import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EmployeeDetailPage from './pages/EmployeeDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/employee" component={EmployeeDetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
