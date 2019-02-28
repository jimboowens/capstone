import React, { Component } from 'react';
import './Nav.css'
import loginTab from '../../misc/OpenWindow';
 // The process: (will be enumerated)

class LoginNavBar extends Component{
    constructor(){
        super()
    }

    githubAuth = ()=>{
        loginTab(`http://localhost:3000/auth/github`)
    }

    render(){
        return(
        <div className="login-nav-bar">
            <div className="left valign-wrapper">WELCOME TO MY PORTFOLIO</div>
            <div className="right">
                <button type="button" onClick={this.githubAuth}   class="btn play-button btn-github waves-effect grey darken-2">Login with github</button>
                <button type="submit" class="btn play-button waves-effect grey darken-2" href="cart">MY CART 0 ITEM - $0.00</button>
            </div>
        </div>
        )
    }
}
export default LoginNavBar;