import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Home />
        </header>
      </div>
    );
  }
}

export default App;
