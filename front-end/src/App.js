import React, { Component } from 'react';

import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './components/home/Home'
import Headers from './components/navHeader/Headers';
import Login from './components/pages/Login';
import Game from './components/pages/Game';
import Register from './components/pages/Register';
import Cart from './components/pages/Cart';
import Logout from './components/pages/Logout';
import Post from './components/pages/Post';
import Favorites from './components/pages/Favorites';
import Deals from './components/pages/Deals';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Headers />
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/game/:id" component={Game}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/post" component={Post}/>
            <Route exact path="/favorites" component={Favorites}/>
            <Route exact path="/deals" component={Deals}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
