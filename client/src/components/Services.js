import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Container, Col, Row } from 'react-bootstrap'
import ContactForm from './ContactForm'
import Logo from '../images/logo.png'
import '../css/Home.css'
import video from '../video/home_video.mp4'

const Home = (props) => {

    useEffect(() => {
        document.getElementById('vid').play();
    });

    return (
        <>
            <Container className='Container card'>
                <img class="Logo" src={ Logo } />
                <div class='mobile-show'>
                    <div class='video-container'>
                        <video id='vid' width="100%" height="100%" controls autoplay loop muted>
                            <source src="https://dl.dropboxusercontent.com/s/uw71zoayd4bffh6/A2%20Roofing%20Inc%20-%2009.04.2021.mp4?dl=0%22/%3E"/>
                        </video>
                    </div>
                </div>
                <NavBar/>
                <Row className="Row padding-50">
                    <Col className='Col' md={7}>
                        <h1>Services</h1>
                        <hr/>
                        <p>We offer solutions for both residential and commercial needs, including, new construction, roof repairs and replacement. We are certified for
installations of shingle, tile, modified bitumen, TPO, stone coated metal, standing seam and other metal roofing systems.</p>
                        <ul>
                            <li>One stop shopping contact that will available to them every step of the way</li>
                            <li>Professional, honest, consistent and transparent communication from compiling the initial quote to delivering the close out package</li>
                            <li>Expert guidance from a 40+ year veteran of the roofing industry, to ensure our clients make the best decisions for their project</li>
                            <li>Superior workmanship using superior products</li>
                            <li>Minimizing impacts to our client’s property</li>
                        </ul>
                    </Col>
                    <Col className='Col' md={5}>
                        <h1>Contact Us</h1>
                        <hr/>
                        <ContactForm/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home