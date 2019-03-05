import React, { Component } from 'react';

class MainNav extends Component{
    render(){
        console.log(this.state)
        return(
            <div className="main-nav">
                <nav>
                    <div className="nav-wrapper teal darken-2">
                        <ul className="left hide-on-med-and-down">
                            <li className="active"><a href="post">Post an Item for Sale</a></li>
                            <li className="active"><a href="favorited">Favorites</a></li>
                            <li className="active"><a href="deals">Find Deals</a></li>
                            <li className="active"><a href="deals/under$10">Find Deals Under $10</a></li>
                        </ul>
                    </div>
            </nav>      

            </div>
        )
    }
}
export default MainNav;