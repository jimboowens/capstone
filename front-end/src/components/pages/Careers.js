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

    componentDidMount(){
		// console.log(this.props.auth);
		if(this.props.auth.token === undefined){
			// if the user has no token... they should not be here. Goodbye.
			this.props.history.push('/login')
		}
	}

    render(){
        console.log('Careers Screen')
        return(
            <main>
                <div className="item-container">
                    <h1>Help us make an impact.</h1>
                    <p>
                        Buying and selling wares is the cornerstone of modern business and life. Our lives rotate around work and serving others here at eBuy. We provide an integral service to our merchants, and connecting them with customers is of paramount importance.  
                    </p>
                    <h2>Why you want to work with us.</h2>
                    <p>
                        We have built an exceptional business model that is robust, and we are blessed to have a phenomenal team. While we are new, we are passionate and driven to make a difference in our method of user interaction. The big online shopping companies have shifted their belief in loyalty to their laborer, but we believe the best way for an excellent user experience is an excellent work environment.
                    </p>
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