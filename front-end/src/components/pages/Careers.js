import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Careers extends Component{
    constructor(){
        super()
        this.state={
            msg:"",
        }
    }

  

    render(){
        console.log('Careers Screen')
        return(
            <main>
                <div>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <div className="underConstruction">UNDER CONSTRUCTION</div>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                    <i className="large material-icons">do_not_disturb_on</i>
                </div> 
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

    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Careers);