import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class MainNav extends Component{
    render(){
        console.log(this.state)
        return(
            <div className="main-nav">
                <nav>
                    <div className="nav-wrapper teal darken-2">
                        <ul className="left hide-on-med-and-down">
                            <li><Link className="active" to="post">Post an Item for Sale</Link></li>
                            <li><Link className="active" to="favorites">Favorites</Link></li>
                            <li><Link className="active" to="deals">Find Deals</Link></li>
                            <li><Link className="active" to="under$10">Find Deals Under $10</Link></li>
                        </ul>
                    </div>
            </nav>      

            </div>
        )
    }
}
export default MainNav;