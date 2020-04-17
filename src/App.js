import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Pictures from './components/Pictures'
import Settings from './components/Settings'
import Favorites from './components/Favorites'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {


  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <About />
          <Pictures />
          <Favorites />
          <Settings />
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
