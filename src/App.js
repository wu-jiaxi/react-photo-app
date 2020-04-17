import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Pictures from './components/Pictures';
import Settings from './components/Settings';
import Favorites from './components/Favorites';
import Aquarium from '../src/assets/koifish.jpg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {


  render() {
    return (
      //using Router make paths from list items
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/pictures' component={Pictures} />
              <Route path='/favorites' component={Favorites} />
              <Route path='/settings' component={Settings} />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <img className="koifish__picture" src={Aquarium} alt=""></img>
    <div className="koifish__text">
      <h1> Welcome to Striking Fish Photos! </h1>
      <h2> Here at Striking Fish Photos, we are dedicated </h2>
      <h2> to showing the beauty of underwater aquatics, </h2>
      <h2>and the tranquility of aquamarine life</h2>
    </div>
  </div>
);

export default App;
