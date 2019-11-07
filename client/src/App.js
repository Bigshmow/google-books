import React from 'react';
import './App.css';
import Header from './components/Header';
import Mainjumb from './components/Jumbotron';
import Searchcard from './components/Search';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <Header />
      <Mainjumb />
      <Searchcard />

      <Results />
    </div>
  );
}

export default App;
