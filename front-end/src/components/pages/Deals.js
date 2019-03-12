import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios'
import ItemCard from '../utility/ItemCard'

class Deals extends Component{
    constructor(){
        super()
        this.state={
            msg:"",
            items:[],
        }
    }

    componentDidMount(){
		// console.log(this.props.auth);
		if(this.props.auth.token === undefined){
			// if the user has no token... they should not be here. Goodbye.
            this.props.history.push('/login')
        }else{
            const itemsPromise = axios.get(`${window.apiHost}/items/getHome`)
            itemsPromise.then((response)=>{
                // console.log(response.data)
                const items = response.data
                this.setState({
                    items,
                })
            })
        }
    }

    render(){
        console.log(this.state)
        const itemCards = this.state.items.map((item,i)=>{
            return <ItemCard key={i} item={item}/>
        })
        return(
            <div className="row">
                <div className="col s12">
                {itemCards}
                </div>
            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Deals);



    


