import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import authAction from '../../actions/authAction'
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css'

class Register extends Component{
    constructor(){
        super();
        this.state={
            msg:"",
            showAlert:false,
        }
    }

   
    componentWillReceiveProps(newProps){
        // console.log(newProps);
            if(newProps.auth.msg === 'user exists'){
                this.setState({
                    showAlert:true,
                    title:"Registration Error",
                    text:"Email is already registered. Login or chooose a different email.",
                    onConfirm:() => this.setState({ showAlert: false }),
                })
            }else if(newProps.auth.adminToken === "requested"){
                this.setState({
                    showAlert:true,
                    title:"Merchant Request Received and Logged",
                    text:"You have requested to be listed as a merchant. You will be notified via the given email upon approval.",
                    onConfirm:()=>this.setState({showAlert:false}),
                })
            }else if (newProps.auth.msg ==="user added"){
                this.props.history.push('/')
            }
    
    }

    registerSubmit= (event)=>{
        event.preventDefault();
        console.dir(event.target);
        const email = event.target[0].value
        // const username = document.getElementById('email').value would also work here.
        const username = event.target[1].value
        const password = event.target[2].value
        const adminRequestStatus = event.target[3].checked 
        // console.log(username,password)
        this.props.authAction({
            email,password,username,adminRequestStatus,
        })
    }

    render(){
        return(
        <main>
            <SweetAlert
               show={this.state.showAlert}
               title={this.state.title}
               text={this.state.text}
               onConfirm={this.state.onConfirm}
           />
           <SweetAlert
               show={this.state.adminRequest}
               title={this.state.title}
               text={this.state.text}
               onConfirm={this.state.onConfirm}
           />
            <center>
            <div className="container">
                <div className="z-depth-1 teal darken-3 row register">
                <form className="col s12" onSubmit={this.registerSubmit}>
                    <div className='row'>
                        <div className='col s12'></div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input className='validate' type='email' name='email' id='email' />
                            <label htmlFor='email'>Please enter your email</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input className='validate' name="username" type='text' id='username' />
                            <label htmlFor='username'>Please enter your username</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input className='validate' type='password' name='password' id='password' />
                            <label htmlFor='password'>Please enter your password</label>
                        </div>
                        <label>
                            <Link className='teal-text' to='/forgotPassword'><b>Forgot Password?</b></Link>
                        </label>
                    </div>
                    <p><label>
                        <input id="indeterminate-checkbox"className="teal-text" type="checkbox" />
                        <span>Request to be a merchant -- this allows you to post items for sale, in addition to general access as a user.</span>
                    </label></p>
                    <br />
                    <center>
                    <div className='row'>
                        <button type='submit' name='btn_register' className='col s12 btn btn-large waves-effect teal darken-4 '>Register</button>
                    </div>
                    </center>
                </form>
                </div>
            </div>
            <Link to="/register">Create account</Link>
            </center>
            <div className="section"></div>
            <div className="section"></div> 
        </main>
        )
    }
}

function mapStateToProps(state){
    // state = rootReducer/store
    return({
        // key = this.props.key will be accessible to this component
        // which is to say the key in the following key value pair(s) will be this.props.(key)
        // value = property of rootReducer
        auth: state.auth,
    })
}

function mapDispatchToProps(dispatcher){
    // dispatch is the thing that sends the action to all reducers
    return(bindActionCreators({
        authAction:authAction,
    },dispatcher))
}

// export default Register;
export default connect(mapStateToProps,mapDispatchToProps)(Register)