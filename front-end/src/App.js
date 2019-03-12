import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './components/home/Home'
import Headers from './components/navHeader/Headers';
import Login from './components/pages/Login';
import Item from './components/pages/Item';
import Register from './components/pages/Register';
import Cart from './components/pages/Cart';
import Logout from './components/pages/Logout';
import Post from './components/pages/Post';
import Favorites from './components/pages/Favorites';
import Deals from './components/pages/Deals';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Careers from './components/pages/Careers';
import Support from './components/pages/Support';
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
            <Route exact path="/items/:id" component={Item}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/postItem" component={Post}/>
            <Route exact path="/favorites" component={Favorites}/>
            <Route exact path="/deals" component={Deals}/>
            <Route exact path="/deals/:id" component={Deals}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/careers" component={Careers}/>
            <Route exact path="/support" component={Support}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
