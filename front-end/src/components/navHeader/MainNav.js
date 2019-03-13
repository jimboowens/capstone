import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class MainNav extends Component{
    constructor(){
        super()
        this.state={
            showItem:true,
        }
    }
    
    render(){
        return(
            <nav>
                {/* <Post />  to simplify app.js */}
                <div className="nav-wrapper teal darken-1">
                    <Link to="/" className="brand-logo center"><img className="logo" src="images/favicon.ico" alt=""/></Link>
                    <ul className="left hide-on-med-and-down miniNav">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/support">Support</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
          </nav>
        )
    }
}

export default MainNav;

