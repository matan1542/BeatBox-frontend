import React from 'react';
import logo from './logo.svg';
import Home from './components/Home'
import {HashRouter as Router, Switch,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
