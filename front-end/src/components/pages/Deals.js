import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Deals extends Component{

    render(){
        return(
       <div>Sanity Check</div>
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