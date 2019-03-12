import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/home.css'

class MiniNavBar extends Component{
    render(){
        return(
            <div className="main-nav">
                <nav>
                    <div className="nav-wrapper teal darken-2">
                        <ul className="left hide-on-med-and-down">
                            <li><Link className="active" show={this.showItem} to="postItem">Post an Item for Sale</Link></li>
                            <li><Link className="active" show={this.showItem} to="favorites">Favorites</Link></li>
                            <li><Link className="active" show={this.showItem} to="deals">Find Deals</Link></li>
                            <li><Link className="active" to="deals/under$10" onClick={()=>{this.setState({showItem:false})}}>Find Deals Under $10</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default MiniNavBar;