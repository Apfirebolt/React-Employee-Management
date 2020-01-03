import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EmployeeDetailPage from './pages/EmployeeDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/:id" component={EmployeeDetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
