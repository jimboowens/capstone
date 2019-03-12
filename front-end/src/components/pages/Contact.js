import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Contact extends Component{
    constructor(){
        super()
        this.state={
            msg:"",
        }
    }

    componentDidMount(){
		// console.log(this.props.auth);
		if(this.props.auth.token === undefined){
			// if the user has no token... they should not be here. Goodbye.
			this.props.history.push('/login')
		}
	}

    render(){
        console.log('Contact Screen')
        return(
            <main>
                <div className="item-container">
                    <img src="/images/support.jpeg" alt=""/>
                    <h1>If we did something wrong, let us know.</h1>
                    <p>
                        Your satisfaction is as important to us as it is to you. We are your first line of defense against a less than exceptional experience. 
                    </p>
                    <span id="email"><a href="mailto:support-patron@ebuy.com">EMAIL US</a></span>
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

export default connect(mapStateToProps,mapDispatchToProps)(Contact);