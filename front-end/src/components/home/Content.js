// import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import ItemCard from '../utility/ItemCard';
// import axios from 'axios';

// class Content extends Component{
//     constructor(){
//         super()
//         this.state={
//             items:[]
//         }
//     }

//     componentDidMount(){
//         const itemsPromise = axios.get(`${window.apiHost}/items/getHome`)
//         itemsPromise.then((response)=>{
//             console.log("response.data:")
//             console.log(response.data)
//             const items = response.data
//                 if (this.state.auth){
//                 this.setState({
//                     items,
//                 })
//             }
//         })
//     }

//     render(){
//         const itemCards = this.state.items.map((item,i)=>{
//             return <ItemCard key={i} item={item}/>
//         })
//         return(
//             <div className="row">
//                 <div className="col s12">
//                 {itemCards}
//                 </div>
//             </div>
//         )
//     }
// }

// // export default Content;
// function mapStateToProps(state){
//     return({
//         auth:state.auth
//     })
// }

// function mapDispatchToProps(dispatcher){
//     return(bindActionCreators(({
        
//     }),dispatcher))
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Content)

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