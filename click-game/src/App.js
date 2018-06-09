import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import CardContainer from './components/CardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <CardContainer />
      </div>
    );
  }
}

export default App;
