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
            case "?post=failed": return this.setState({showAlert:true,title:"Post functionality is accessible to merchants only.", text:"Please contact us if you are interested in becoming a merchant, and we will follow up by contacting you via the provided email.",}) 
            case "?user=exists": return this.setState({showAlert:true,title:"The user email you submitted is already registered. Please provide another email, or login with current email.", text:"If you feel you reached this alert in error, please email our support team. Feel free to contact us if you are interested in becoming a merchant, and we will follow up by contacting you via the provided email.",}) 
            case "?admin=requested": return this.setState({showAlert:true,title:"The user email you registered admin status is requested. Our admin team will review contact you within 2-3 business days for application review.", text:"If you feel you reached this alert in error, please email our support team. Currently, you have access as a patron and we suggest you search our site for items you can purchase.",}) 
            case "?registerSuccess": return this.setState({showAlert:true,title:"You are now registered, and your session is active.", text:"Please review our site. To purchase items, add them to your cart and then proceed to checkout!",}) 
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