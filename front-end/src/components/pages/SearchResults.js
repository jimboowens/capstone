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
            <div className="row item-container">
                <div className="col s12">
                    <div>
                        <h4>Here are your search Results:</h4>
                    </div>
                    <div>
                        {itemCards}
                    </div>
                    <div className='col s12'>
                        <p>
                            Our search algorithm combs through our database of items currently available for sale, and first tries to find items with names similar or matching your request. 
                            If there are none close enough to your request, we return items more periperally related to what you might be wanting to find. If still nothing meets our criteria, 
                            our still-in-beta AI offers up possible suggestions we hope you will like. If there is nothing here that piques your interest, please try another entry, or contact 
                            us and we will see what we can do to uncover what you need.
                        </p>
                    </div>
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



    


