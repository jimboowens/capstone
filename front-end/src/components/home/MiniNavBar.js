import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/home.css'

class MiniNavBar extends Component{
    render(){
        return(
            <nav>
                {/* <Post />  to simplify app.js */}
                <div className="nav-wrapper teal darken-1">
                    <Link to="/" className="brand-logo center">Logo</Link>
                    <ul className="left hide-on-med-and-down miniNav">
                        <li><Link to="about">About Us</Link></li>
                        <li><Link to="careers">Careers</Link></li>
                        <li><Link to="support">Support</Link></li>
                        <li><Link to="contact">Contact Us</Link></li>
                    </ul>
                </div>
          </nav>
        )
    }
}

export default MiniNavBar;