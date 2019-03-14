import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'
import loginTab from '../../misc/OpenWindow';
import {connect} from 'react-redux';
 // The process: (will be enumerated to come)
let rightNavBar = <br></br>;

class LoginNavBar extends Component{

    githubAuth = ()=>{
        // 1. User clicks and opens the new window via loginTab
        // 2. New window is open to crossOrigin but is github.com
        loginTab(`https://ebuy.jimowens.dev/auth/github`)
    }
         
            // 3. Once user authenticates, github sends them to /auth/github/callback
            // 4. The callback URL either gets the uid or inserts them
            // 5. Callback then takes the uid and tokenizes it with JWT
            // 6. Token is sent back to the github window that loginTab opened and
                // window.opener.postMessage is in the script of that window which
                // sends the data back over to original page
            // 7. It's now available in this promise resolution
            // 8. Put it in localstorage so we can use it next time.

    render(){
        if(this.props.auth.token){
            // then user is logged in
            rightNavBar=<span>
                    Welcome, {this.props.auth.username}! 
                    <Link className="mainLinks" to="cart"><i className="material-icons">shopping_cart</i></Link>
                    <Link className="mainLinks" to="logout">Log Out</Link>
                    </span>
        } else{
            rightNavBar=
            <span>
                <Link className="mainLinks" to="login">Sign in</Link>, or <Link className="mainLinks" to="register">Register</Link>
                <Link className="mainLinks" to="cart"><i className="material-icons">remove_shopping_cart</i></Link>
            </span>
        }
        return(
            
            <div className="login-nav-bar">
                <div className="left valign-wrapper">
                    WELCOME TO : <Link to="/" className="mainLinks"> eBuy</Link>
                </div>
                <div className="right">
                    {rightNavBar}
                </div>
            </div>

        )
    }
}

function mapStateToProps(state){
    return({
        auth:state.auth,
        cart:state.cart,
    })
}

export default connect(mapStateToProps)(LoginNavBar)
// export default LoginNavBar;