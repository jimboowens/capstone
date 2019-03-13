import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logoutAction from '../../actions/logoutAction'

class Logout extends Component{
    constructor(){
        super()
        this.state={
            msg:"",
        }
    }

    handleLogout = (event)=>{
        event.preventDefault()
        this.props.logoutAction()
        this.props.history.push('/?loggedOut')
    }

    render(){
        console.log('at the logout screen')
        return(
        <main>
            <center>
            <div className="container">
                <div className="z-depth-1 teal darken-3 row logout">
                <form className="col s12" onSubmit={this.handleLogout}>
                    <br />
                    <center>
                    <div className='row'>
                        <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect teal darken-4'>Log Out</button>
                    </div>
                    </center>
                </form>
                </div>
            </div>
            <Link to="/" >Are you sure you want to log out?</Link>
            </center>
            <div className="section"></div>
            <div className="section"></div> 
        </main>
        )
    }
}

function mapStateToProps(state){
    return({
        auth:state.auth,
    })
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        logoutAction,
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Logout);