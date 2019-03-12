import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import postAction from '../../actions/postAction'
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css'

class Post extends Component{
    constructor(){
        super()
        this.state={
            msg:"",
            showAlert:false
        }
    }

    componentDidMount(){
		// console.log(this.props.auth);
		if(this.props.auth.token === undefined){
			// if the user has no token... they should not be here. Goodbye.
			this.props.history.push('/login')
		}
	}

    componentWillReceiveProps(newProps){
        console.log(newProps)
        if (newProps.auth.msg === "item posted"){
            // console.log(this.props.history)
            this.props.history.push('/?item=posted')
        }else if (newProps.auth.msg === "bad item"|| newProps.auth.msg==="bad token"){
            this.setState({
                showAlert:true,
            })
        }
    }

    handlePost = (event)=>{
        event.preventDefault()
        console.dir(event.target)
        const name = event.target[0].value
        const description = event.target[1].value
        const type = event.target[2].value
        const price = event.target[3].value
        const pictureList = event.target[4].files
        this.props.postAction({
            name,description,type,price,pictureList,
        })
    }

    render(){
        return(
            <main>
                <SweetAlert
                show={this.state.showAlert}
                title="Sign-in Error"
                text="You are not a registered merchant. We will email you upon approval of merchant status. Otherwise, please enjoy our site as a patron."
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
                                <label htmlFor="name"><i className="material-icons">info</i> Item Name</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="input-field col s12">
                                <input id="description" type="text" className="validate" />
                                <label htmlFor="description"><i className="material-icons">insert_comment</i> Item description</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="input-field col s12">
                                <input id="type" type="text" className="validate" />
                                <label htmlFor="type"><i className="material-icons">insert_comment</i> Item type</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="input-field col s12">
                                <input id="price" type="text" className="validate" />
                                <label htmlFor="price"><i className="material-icons">attach_money</i> Item Price</label>
                            </div>
                        </div>
                        <div className="file-field input-field">
                            <div className="btn">
                            <span><i className="material-icons">insert_photo</i> Attach Photo(s)</span>
                            <input name="images" type="file" multiple />
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

export default connect(mapStateToProps,mapDispatchToProps)(Post);

{/* <div class="input-field col s12">
    <select>
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
  </div> */}

//   <div class="input-field col s12 m6">
//   <select class="icons">
//     <option value="" disabled selected>Choose your option</option>
//     <option value="" data-icon="images/sample-1.jpg" class="left">example 1</option>
//     <option value="" data-icon="images/office.jpg" class="left">example 2</option>
//     <option value="" data-icon="images/yuna.jpg" class="left">example 3</option>
//   </select>
//   <label>Images in select</label>
// </div>