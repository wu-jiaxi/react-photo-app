import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Pictures from './components/Pictures';
import Settings from './components/Settings';
import Favorites from './components/Favorites';
import Aquarium from '../src/assets/koifish.jpg';
import Signup from './components/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'login'
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.text())
      .then(text => console.log(text))
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  render() {
    return (
      //using Router make paths from list items
      <Router>
        <div className="App">
          <header className="App-header">

            <Navbar />
            {this.state.route === 'login'
              ? <Login onRouteChange={this.onRouteChange} />
              : <div>
                <Switch>

                  <Route path="/" exact component={Home} />
                  <Route path='/login' component={Login} />
                  <Route path='/pictures' component={Pictures} />
                  <Route path='/favorites' component={Favorites} />
                  <Route path='/settings' component={Settings} />
                  <Route path='/signup' component={Signup} />
                </Switch>
              </div>
            }
          </header>
        </div>
      </Router>
    );
  }
}

// picture and text details for Home component.
const Home = () => (
  <div className="home__container">
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
