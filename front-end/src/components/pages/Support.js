import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Support extends Component{
    constructor(){
        super()
        this.state={
            msg:"",
        }
    }

  
    render(){
        console.log('Support Screen')
        return(
            <main>
                <div className="item-container">
                <h1>OOPS...</h1>
                <img src="images/support.webp" alt=""/>
                <p>We all have issues. If you need help solving a problem with connecting to our site or using any of our great components, don't hesitate to contact us.</p>
                <span id="email"><a href="mailto:support-general@ebuy.com">EMAIL US</a></span>
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

export default connect(mapStateToProps,mapDispatchToProps)(Support);