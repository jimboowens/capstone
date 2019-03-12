import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import deleteAction from '../../actions/deleteAction'


class CartRow extends Component{
	constructor(){
		super()
		this.state={
			msg:''
		}
	}

	componentWillReceiveProps =(newProps) =>{
		console.log(newProps)
		this.props.history.push('/cart/?item=deleted')
	}

	handleDelete = (event)=>{
		event.preventDefault()
		const uid = this.props.product.uid
		const gid = this.props.product.gid
		// const image=this.props.product.image
		this.props.deleteAction(
			uid,
			gid,	
		)
	}

	render(){
		const product = this.props.product;
		return(
			<tr className="item-container">
				{/* <td>{product.image}</td> */}
				<td>{product.name}</td>
				<td>{product.price}</td>
				<td><button className="btn btn-danger" onClick={this.handleDelete}>Delete</button></td>
			</tr>
		)
	}
}

// export default CartRow;
function mapStateToProps(state){
	return({
		auth:state.auth,
	})
}

function mapDispatchToProps(dispatcher){
	return bindActionCreators({
		deleteAction,
	},dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(CartRow)