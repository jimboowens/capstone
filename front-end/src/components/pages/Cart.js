import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cartAction from '../../actions/cartAction';
import CartRow from '../utility/CartRow';
import axios from 'axios';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css'

class Cart extends Component{
	constructor(){
		super();
		this.state={
			totalItems:[],
			showAlert:false,
			title:'',
			text:'',
			msg:''
		}
	}

	makePayment=()=>{
		// console.log(window.StripeCheckout)
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_ONdQWDuFBm8JYUk46kadwInk',
            locale: 'auto',
            image: 'images/shopping-cart.png',
            token: (token)=>{
                var theData = {
                    amount: this.props.cart.totalPrice * 100, //  the total is in pennies
                    stripeToken: token.id,
                    userToken: this.props.auth.token,
                }
                axios({
                    method: 'POST',
                    url: `${window.apiHost}/cart/stripe`,
                    data: theData
                }).then((response) => {
                    // console.log(response);
                    response.data.msg === 'paymentSuccess' ? this.props.history.push('/?thankYou') : console.log(response.data.msg)
                });
            }
        });
        handler.open({
            name: "Pay Now",
            description: 'Classic Models order',
            amount: this.props.cart.totalPrice * 100 //the total is in pennies
        })
    }

	componentDidMount(){
		// console.log(this.props.auth);
		if(this.props.auth.token === undefined){
			// if the user has no token... they should not be here. Goodbye.
			this.props.history.push('/login')
		}else{
			// the user does have a token, go get their cart!
			this.props.cartAction(this.props.auth.token);
			
		}
	}

	componentWillUpdate(newProps){
		if (newProps.location.search==="?item=deleted"&&this.props.location.search !=="?item=deleted" && this.props.msg==="item deleted"){
			
			this.setState({showAlert:true,title:"Item deleted!", text:"We have updated your cart. Continue shopping, or click on the cart to proceed to checkout.",}) 
		}

	}

	render(){
		// console.log(this.props)
		if(!this.props.cart.items && !this.props.cart.msg){
			// if this return occurs, the render is DONE
			return(
				<div className="cartBody">
					<h3>Your cart is empty. Click add to cart in any game page to fill your cart.</h3>
				</div>
			)
		}else{
			var cartArray = this.props.cart.contents.map((product,i)=>{
				return (
					<CartRow key={i} product={product} history={this.props.history}></CartRow>
				)
			})
			return(
				<div>
					<SweetAlert show={this.state.showAlert} title={this.state.title} text={this.state.text}  onConfirm={()=>this.setState({showAlert: false})} />
					<h2>Your order total is: ${this.props.cart.total} - <button className="btn btn-primary" onClick={this.makePayment}><i className="material-icons">shopping_cart</i>Proceed to Checkout</button></h2>
					<table className="table table-striped">
						<thead>
							<tr>
								{/* <th>Image</th> */}
								<th>Product</th>
								<th>Price</th>
								<th>Remove</th>
							</tr>
						</thead>
						<tbody>
							{cartArray}
						</tbody>
					</table>
				</div> 	 
			)
		}
	}
}

function mapStateToProps(state){
	return{
		auth: state.auth,
		cart: state.cart,
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		cartAction: cartAction,
	},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);



