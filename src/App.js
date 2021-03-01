import React from 'react'
import { Switch } from 'react-router-dom';
import './style/global.scss';
import Header from './cmps/Header'
import Socket from './pages/Socket'
import Footer from './cmps/Footer'



function App() {
  return (
    <div className="App flex column align-center">
      <Header />
      <Switch>
      <Socket/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
