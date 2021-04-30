import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../css/CustomeCarousel.css'

const CustomeCarousel = (props) => {

    const renderSlides = () => {
        return props.slides.map(slide =>
            <Carousel.Item>
                <div class="slide" style={{backgroundImage: `url(${slide})`}}></div>
                <Carousel.Caption className='Caption'>
                    <h3>{props.address}</h3>
                </Carousel.Caption>
            </Carousel.Item>)
    }

    return (
        <Carousel className="Carousel">
            { props.slides ? renderSlides() : null }
        </Carousel>
    )
}

export default CustomeCarousel