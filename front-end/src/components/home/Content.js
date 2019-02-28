import React, { Component } from 'react';
import Info from '../utility/Info';

class Content extends Component{
    render(){
        return(
            <div className="row">
                <div className="col s12">
                <Info/>
                <Info/>
                <Info/>
                <Info/>
                </div>
            </div>
        )
    }
}

export default Content;