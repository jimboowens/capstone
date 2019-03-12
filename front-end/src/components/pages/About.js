import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class About extends Component{
    constructor(){
        super()
        this.state={
            msg:"",
        }
    }

    render(){
        return(
            <main>
            <div className="item-container">
                <img id="logo" src="/images/shopping-cart.png" />
                <p className="aboutUsText"> 
                    Here at eBuy, we are all about the consumer. Without attention to the customer, how would business survive? As a medium for merchants to post, sell, and ship items, we are invested in helping you succeed.
                </p>
                <p className="aboutUsText">
                    Ebuy offers a simple and elegant interface that makes your products shine. As a merchant, you may post items for sale, and we handle the shipping to the consumer. Rates are tiered by volume and scale of sales. Income is disbursed bi-weekly to the card supplied on merchant status approval.
                </p>
                <p className="aboutUsText"> 
                    Every person who signs up is automatically listed as a patron. Merchant status is reviewed when you sign up, and you may request to be made a merchant at any time. You will receive an email from our review team within 2-4 business days at the email you submit when you activated your account. We take security and user experience very seriously, and hope to help you to meet our standards as a merchant. Returns, trades, and refunds are subject to local business ethical standards.
                </p>
                <p className="aboutUsText">
                    On usage of this site, you agree to our use of cookies and local storage in order to make our site as fast and efficient as possible. We utilize Stripe as a payment method, which is safe and secure for our buyers and sellers. We do not keep card information, and waive all liability for lost, stolen, or contestible purchases as a site for connecting consumers to sellers. 
                </p>
                <p className="aboutUsText">
                    The standards to which our venders are held is high. Ratings and complaints are taken very seriously, and unethical or illegal malfeasance concerning our patrons is prosecuted to the full extent of the law. As a site that prioritizes the user experience above all else, our principal concerns are the security of our brand and the sanctity of the buyer/seller relationship.
                </p>

                <div className="finePrint">More functionality coming soon!</div>
            </div>
        </main>
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

export default connect(mapStateToProps,mapDispatchToProps)(About);