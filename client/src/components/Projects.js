import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { Container, Col, Row, Modal, Button } from 'react-bootstrap'
import CustomeCarousel from './CustomeCarousel'
import ContactForm from './ContactForm'
import Logo from './../images/logo.png'
import properties from './../properties/older-properties'
import './../css/Projects.css'
import './CustomeCarousel'
import video from '../video/home_video.mp4'

const Projects = (props) => {

    const [show, setShow] = useState(false);
    const [address, setAddress] = useState('');
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        document.getElementById('vid').play();
    });

    const handleClose = () => setShow(false);

    const handleShow = (address, slides) => {
        setAddress(address);
        setSlides(slides);
        setShow(true);
    }

    const Item = (props) => {
        return (
            <div onClick={ () => handleShow(props.address, props.slides) } class='property'>
                <img src={ props.image } />
            </div>
        )
    }

    const RenderProperties = () => {
        return properties.map(property => <Item onClick={ handleShow } address={ property.address } slides={ property.images } image={ property.images[0] } />)
    }

    return (
        <>
            <Modal size="lg" dialogClassName='myModal' show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    {/* <Modal.Title>{ address }</Modal.Title> */}
                </Modal.Header>
                <Modal.Body><CustomeCarousel address={address} slides={slides}/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Container className='Container card'>
                <img class="Logo" src={ Logo } />
                <div class='mobile-show'>
                    <div class='video-container'>
                        <video id='vid' width="100%" height="100%" controls autoplay loop muted>
                            <source src={video}/>
                        </video>
                    </div>
                </div>
                <NavBar />
                <Row className="Row padding-50">
                    <Col className='Col projects' md={ 7 }>
                        <h1>Older Construction</h1>
                        <hr />
                        <RenderProperties />
                    </Col>
                    <Col className='Col' md={ 5 }>
                        <h1>Contact Us</h1>
                        <hr/>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Projects