import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { noMatch } from './pages/noMatch';
import Header from './components/Header';
import Mainjumb from './components/Jumbotron';
import { Search } from './pages/Search';
import { Saved } from './pages/Saved';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Mainjumb />
      <Switch>
    <Route exact path="/google-books" component={Search} />
    <Route exact path="/google-books/saved" component={Saved} />
    <Route component={noMatch} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
