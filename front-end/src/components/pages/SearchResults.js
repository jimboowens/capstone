import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios'
import ItemCard from '../utility/ItemCard'

class SearchResults extends Component{
    constructor(){
        super()
        this.state={
            msg:"",
            items:[],
        }
    }

    componentWillReceiveProps(newProps){
        console.log(newProps)
        if (newProps.searchResults.length<1){
            
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
        console.log(this.props)
        const itemCards = this.props.searchResults.map((item,i)=>{
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
        searchResults:state.searchResults,
    })
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({

    },dispatcher)
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResults);



    


