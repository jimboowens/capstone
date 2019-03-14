import React, { Component } from 'react';
import {Link} from 'react-router-dom'
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
                    <img src="/images/jim.png" alt="" />
                    <h1>Jim Owens</h1>
                    <a className="col s3" href="https://github.com/jimboowens" target="blank"><img src="/images/github.png" alt=""/></a>
                    <a className="col s3" href="https://www.aedin.com/in/jimcowens/" alt="" target="blank"><img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" alt=""/></a>
                    <p>
                        I am a web developer, recently moved over from management at Panera. I am passionate about solving problems in creative and efficient ways, while making ergonomic and enjoyable websites. Code can be 
                        complex, and solving coding issues aren't the only problem. Making code that others can readily read and understand is critical to contributing to a part of any team. I care about my friends and family, 
                        helping to lead worship at my church, my girlfriend Emily, and many other things. I can be found spending time with friends at the park or cooking out with my roommates. I love the marvel cinematic universe
                        and the comics that brought them about. I've read all the Harry Potters, LOTR, the Ender Saga, the Chronicles of Narnia, and other series and books. 
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

export default connect(mapStateToProps,mapDispatchToProps)(Contact);