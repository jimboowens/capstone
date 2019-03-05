import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/home.css'

class MiniNavBar extends Component{
    render(){
        return(
            <nav>
                <div className="nav-wrapper teal darken-1">
                    <Link to="/" className="brand-logo center">Logo</Link>
                    <ul className="left hide-on-med-and-down miniNav">
                        <li><Link to="sass.html">Sass</Link></li>
                        <li><Link to="badges.html">Components</Link></li>
                        <li><Link className="active" to="collapsible.html">JavaScript</Link></li>
                    </ul>
                </div>
          </nav>
        )
    }
}

export default MiniNavBar;