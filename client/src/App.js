import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Prediction from './pages/Prediction'
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/prediction' component={Prediction} />
        <Route path='' component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;


