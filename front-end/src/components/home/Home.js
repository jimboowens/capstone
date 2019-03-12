import React, {Component} from 'react';
import MiniNavBar from './MiniNavBar'
import Carousel from './Carousel'
import Content from './Content'
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css'
import '../styles/home.css'

class Home extends Component{
    constructor(){
        super();
        this.state={
            showAlert:false,
            title:"",
            text:"",
        }
    }

    componentDidMount(){
        // console.log(this.props)
        const text="We have updated your cart. Continue shopping, or click on the cart to proceed to checkout."
        switch(this.props.location.search){
            case "?item=added": return this.setState({showAlert:true,title:"Item Added!",text:text})
            case "?item=posted": return this.setState({showAlert:true,title:"Item Added!",text:text})
            case "?loggedIn": return this.setState({showAlert:true,title:"Your session is active.", text:"Please review our site. To purchase items, add them to your cart and then proceed to checkout!",}) 
            case "?thankYou": return this.setState({showAlert:true,title:"Your have successfully purchased the items in your cart", text:"Please continue to peruse our site. To purchase more items, add them to your cart and then proceed to checkout!",}) 
            default: return ;
        }
    }

    render(){
        return(
            <div className="col s12 home">
                <SweetAlert show={this.state.showAlert} title={this.state.title} text={this.state.text} onConfirm={()=>this.setState({showAlert: false})} />
                <Carousel />
                <MiniNavBar />
                <Content />
            </div>
        )
    }
}

export default Home;