import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import postAction from '../../actions/postAction'
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css'

class Login extends Component{
    constructor(){
        super()
        this.state={
            msg:"",
            showAlert:false
        }
    }

    componentWillReceiveProps(newProps){
        console.log(newProps)
        if (newProps.auth.msg === "item posted"){
            // console.log(this.props.history)
            this.props.history.push('/')
        }else if (newProps.auth.msg === "bad item"|| newProps.auth.msg==="bad token"){
            this.setState({
                showAlert:true,
            })
        }
    }

    handlePost = (event)=>{
        event.preventDefault()
        // console.dir(event.target[3].files)
        const name = event.target[0].value
        const description = event.target[1].value
        const price = event.target[2].value
        const pictureList = event.target[3].files
        this.props.postAction({
            name,description,price,pictureList,
        })
    }

    render(){
        return(
        <main>
            <SweetAlert
               show={this.state.showAlert}
               title="Sign-in Error"
               text="Email/password is not valid. Please re-enter your information or register."
               onConfirm={() => this.setState({ showAlert: false })}
           />
            <center>
            <div className="container">
                <div className="z-depth-1 teal darken-3 row login">
                <form className="col s12" onSubmit={this.handlePost} encType="multipart/form-data">
                    <div className='row'>
                        <div className='col s12'></div>
                    </div>
                    <div className='row'>
                        <div className="input-field col s12">
                            <input id="name" type="text" className="validate" />
                            <label htmlFor="name">Item Name</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="input-field col s12">
                            <input id="description" type="text" className="validate" />
                            <label htmlFor="description">Item description</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="input-field col s12">
                            <input id="price" type="text" className="validate" />
                            <label htmlFor="price">Item Price</label>
                        </div>
                    </div>
                    <div className="file-field input-field">
                        <div className="btn">
                        <span>File</span>
                        <input type="file" multiple />
                    </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                        </div>
                    </div>
                    <br />
                    <center>
                    <div className='row'>
                        <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect teal darken-4'>Post Item</button>
                    </div>
                    </center>
                </form>
                </div>
            </div>
            <Link to="/post/postCompleted" >Post item for sale</Link>
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
        postAction,
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);