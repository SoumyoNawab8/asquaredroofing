import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Container, Col, Row } from 'react-bootstrap'
import ContactForm from './ContactForm'
import Logo from '../images/logo.png'
import '../css/Home.css'
//import video from '../video/home_video.mp4'

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
                            {/* <source src={video}/> */}
                        </video>
                    </div>
                </div>
                <NavBar/>
                <Row className="Row padding-50">
                    <Col className='Col' md={7}>
                        <div class='about'>
                            <h1>About Us</h1>
                            <hr/>
                            <p>A Squared Roofing, Inc. is a recognized leader in the roofing industry. Our reputation is built upon our dedication to our clients, including listening to their needs, ideas and constraints, then delivering the agreed upon result.</p>
                        </div>
                        <div class='mission'>
                            <h1>Mission Statement</h1>
                            <hr/>
                            <p>Our vision is to become our client’s roofing contractor of choice by providing a positive and satisfying roofing experience that exceeds their expectations.</p>
                        </div>
                    </Col>
                    <Col className='Col' md={5}>
                        <h1>Contact Us</h1>
                        <hr/>
                        <ContactForm/>
                    </Col>
                </Row>
            </Container>

            <Container className='Container creds card'>
                <Row className="Row overlay">
                    <Col className='Col' md={6}>
                        <h1>Our <span style={{color: 'red'}}>Credentials</span></h1>
                        <p>With over 15 years in the business, We have partnered with various industry leaders.</p>
                    </Col>
                    <Col className='Col' md={6}>
                        <ul>
                            <li>Energy Star</li>
                            <li>Spirit of Enterprise</li>
                            <li>National Roofing</li>
                            <li>Varitile</li>
                            <li>Atlas</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container className='Container card'>
                <Row className='Row padding-50'>
                <Col className='Col' md={6}>
                    <h3>Locations</h3>
                    <hr/>
                    <p><b>Tampa, Fl</b><br/>4813 N Manhattan Ave, Tampa, Fl 33614</p>
                    <p><b>Miami, Fl</b><br/>8144 W 26th Ave, Hialeah, Fl 33016</p>
                </Col>
                <Col className='Col' md={6}>
                    <h3>Phone Numbers</h3>
                    <hr/>
                    <p><b>Tampa, Fl</b><br/>813 559 1252</p>
                    <p><b>Miami, Fl</b><br/>305 231 7111</p>
                </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home