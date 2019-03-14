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
                <img src="/images/careers.png" alt="" />
                    <h1>Help us make an impact.</h1>
                    <p>
                        Buying and selling wares is the cornerstone of modern business and life. Our lives rotate around work and serving others here at eBuy. We provide an integral service to our merchants, and connecting them with customers is of paramount importance.  
                    </p>
                    <h2>Why you want to work with us.</h2>
                    <p>
                        We have built an exceptional business model that is robust, and we are blessed to have a phenomenal team. While we are new, we are passionate and driven to make a difference in our method of user interaction. The big online shopping companies have shifted their belief in loyalty to their laborer, but we believe the best way for an excellent user experience is an excellent work environment.
                    </p>
                    <p>
                        The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless crew the Minnow would be lost. 
                        the Minnow would be lost. Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a 
                        world of criminals who operate above the law. Well the first thing you know ol' Jeds a millionaire. Kinfolk said Jed move away from there. 
                        Makin' your way in the world today takes everything you've got. Takin' a break from all your worries sure would help a lot. So join us here 
                        each week my friends you're sure to get a smile from seven stranded castaways here on Gilligans Isle. Just two good ol' boys Never meanin' 
                        no harm. Beats all you've ever saw been in trouble with the law since the day they was born. Believe it or not I'm walking on air. I never 
                        thought I could feel so free. Flying away on a wing and a prayer. Who could it be? Believe it or not its just me. In 1972 a crack commando 
                        unit was sent to prison by a military court for a crime they didn't commit. These men promptly escaped from a maximum security stockade to 
                        the Los Angeles underground. It's a beautiful day in this neighborhood a beautiful day for a neighbor. Would you be mine? Could you be mine? 
                        Its a neighborly day in this beautywood a neighborly day for a beauty. Would you be mine? Could you be mine. And we'll do it our way yes our 
                        way. Make all our dreams come true for me and you. So this is the tale of our castaways they're here for a long long time. They'll have to 
                        make the best of things its an uphill climb.
                    </p>
                    <span id="email"><a href="mailto:onboarding@ebuy.com">EMAIL US</a></span>
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