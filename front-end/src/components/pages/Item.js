import React, { Component } from 'react';
import axios from 'axios';
import '../styles/item.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import updateCart from '../../actions/updateCart'

class Item extends Component{
    constructor(){
        super()
        this.state = {
            item: {},
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id)
        const gid = this.props.match.params.id;
        const itemResponse = axios.get(`${window.apiHost}/items/${gid}`);
        itemResponse.then((response)=>{
            // console.log(response.data[0])
            const itemData = response.data[0]
            this.setState({
                item:itemData,
            })
        })

    }

    componentWillReceiveProps(newProps){
        // console.log(newProps)
        if (newProps.cart.length !== this.props.cart.length){
            this.props.history.push('/?added=item')
        }
    }

    addToCart = ()=>{
        console.log(this.props.auth.token)
        const token = this.props.auth.token
        this.props.updateCart(
            token,
            this.state.item.id
        )
    }

    render(){
        console.log(this.state)
        let image = '';
        if (this.state.item.picture){
            image = this.state.item.picture
        }

        return(
            <div className="item-container">
                <div className="row">
                    <div className="col s12 m4">
                        <img src={image} alt="" className="item-pic" />
                    </div>
                    <div className="col s12 m8">
                        <div className="row">
                            <h3 className="item-title">{this.state.item.name}</h3>
                            <div className="item-desc">
                            {this.state.item.description}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s1">
                                {/* <span>Qty: {this.state.item.quantity}</span> */}
                                <span>Qty: 0</span>
                            </div>
                            <div className="col s8">
                                <input type="text" name="quantity"/>
                            </div>
                            <div className="col s2">
                                <button onClick={this.addToCart}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
        cart: state.cart,
    }
}
function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        updateCart,
    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(Item);