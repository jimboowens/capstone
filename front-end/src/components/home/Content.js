import React, { Component } from 'react';
import ItemCard from '../utility/ItemCard';
import axios from 'axios';

class Content extends Component{
    constructor(){
        super()
        this.state={
            items:[]
        }
    }

    componentDidMount(){
        const itemsPromise = axios.get(`${window.apiHost}/items/getHome`)
        itemsPromise.then((response)=>{
            // console.log(response.data)
            const items = response.data
            this.setState({
                items,
            })
        })
    }

    render(){
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

export default Content;