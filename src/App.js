import React from 'react';
// import {HashRouter, Route} from 'react-router-dom';
// import Header from './Components/Header';
// import Home from './Components/Home';
// import Blogs from './Components/Blogs';
import Routes from './routes'
import {Helmet} from 'react-helmet'
function App() {
  return (
    <div className="App">
    <Routes/>
    </div>
  );
}

export default App;
