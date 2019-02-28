import React, { Component } from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Carousel extends Component{
    render(){
        const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true
		}
        return(
            <Slider {...settings}>
                <div className="slick-image"><img src="images/screenshots/img_1.png" alt=""/></div>
                <div className="slick-image"><img src="images/screenshots/img_2.png" alt=""/></div>
                <div className="slick-image"><img src="images/screenshots/img_3.png" alt=""/></div>
                <div className="slick-image"><img src="images/screenshots/img_4.png" alt=""/></div>
                <div className="slick-image"><img src="images/screenshots/img_5.png" alt=""/></div>
                <div className="slick-image"><img src="images/screenshots/img_6.png" alt=""/></div>
                <div className="slick-image"><img src="images/screenshots/img_7.png" alt=""/></div>
                <div className="slick-image"><img src="images/screenshots/img_8.png" alt=""/></div>
                <div className="slick-image"><img src="images/screenshots/img_9.png" alt=""/></div>
                <div className="slick-image"><img src="images/screenshots/img_10.png" alt=""/></div>
            </Slider>
        )
    }
}

export default Carousel;