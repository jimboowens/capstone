import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import searchAction from '../../actions/searchAction'

class LogoSearchHeader extends Component{
    constructor(){
        super()
        this.state = {
            msg:"",
            searchResults:[],
        }
    }

    componentWillReceiveProps(newProps){
        console.log(newProps)
        this.props.history.push('/searchResults')
    }

    searchSubmit=(event)=>{
        
        event.preventDefault()
        // console.log(event.target[0].value)
        const searchCriteria = event.target[0].value
        this.props.searchAction({
            searchCriteria,
        })
    }

    render(){
        // console.log(this.state.searchResults)
        return(
            <div className="logo-search-header">
                <div className="right-align">
                    <form onSubmit={this.searchSubmit}>
                        <input type="text" placeholder="Search items for sale"  />
                    </form>
                </div>            
            </div>
        )
    }
}

function mapStateToProps(state){
    return({
        searchResults:state.searchResults
    })
}

function mapDispatchToProps(dispatcher){
    return (bindActionCreators(({
        searchAction:searchAction,
    }),dispatcher))
}

export default connect(mapStateToProps,mapDispatchToProps)(LogoSearchHeader)
// export default LogoSearchHeader;

// for searchresults, need state.auth to get the array, and can copy and paste the item and itemCard thing