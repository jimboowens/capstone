import React, { Component } from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Carousel extends Component{
    render(){
        const settings = {
			dots: true,
			infinite: true,
			speed: 1900,
			slidesToShow: 1,
			slidesToScroll: 1,
            autoplay: true,
            maxHeight:600
		}
        return(
            <Slider {...settings}>
                <div className="slick-image carousel-container"><img src="images/slides/backsplash3.jpg" alt=""/></div>
                <div className="slick-image carousel-container"><img src="images/slides/backsplash1.jpg" alt=""/></div>
                <div className="slick-image carousel-container"><img src="images/slides/backsplash2.jpg" alt=""/></div>
                <div className="slick-image carousel-container"><img src="http://www.hdnicewallpapers.com/Walls/Big/House%20and%20Bungalow/Beautiful_Wooden_Kitchen_Home_Furniture_HD_Images.jpg" alt=""/></div>

            </Slider>
        )
    }
}

export default Carousel;