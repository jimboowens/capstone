import React, { Component } from 'react';
import LoginNavBar from './LoginNavBar';
import LogoSearchHeader from './LogoSearchHeader';
import MainNav from './MainNav';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import searchAction from '../../actions/searchAction'
import './Nav.css'

class Headers extends Component{
    constructor(){
        super()
        this.state={
            msg:'',
        }
    }
    render(){
        // console.log(this.props)
        return (
            <div className="header">
                <div className="center teal darken-4 main-header">
                    <div className="container row">
                        <LoginNavBar />
                    </div>
                </div>
                <div className="container row">
                    <LogoSearchHeader history={this.props.history}/>
                    <div className="row">
                        <MainNav />
                    </div>
                </div>
            </div>
        )
    }
}
// export default Headers;
function mapStateToProps(state){
    return({
        auth:state.auth
    })
}

function mapDispatchToProps(dispatcher){
    return (bindActionCreators(({
        searchAction:searchAction,
    }),dispatcher))
}

export default connect(mapStateToProps,mapDispatchToProps)(Headers)