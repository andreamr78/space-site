import React from 'react'
import { useState } from 'react';
import data from '../assets/shared/data.json'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import DestinationSlider from './DestinationSlider';
import Navbar from 'react-bootstrap/Navbar';
import '../sass/DestNav.scss'


function DestinationCarousel() {
  const {destinations} = data;
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [distance, setDistance] = useState('');
  const [travel, setTravel] = useState('');
  const [image, setImage] = useState('');

  function pickedNameHandler(name, description, distance, travel, image){
    setName(name);
    setDescription(description);
    setDistance(distance);
    setTravel(travel)
    setImage(image);
    setShow(true);
  }
      return(
        <div>
        <Navbar variant="dark" className='destinationNav'>
        <Container id='link-container-des'>
          <Navbar.Brand href="#home"></Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          {destinations.map((destination, i) => {
            return(
              <div id='dest-nav'>
                <Nav key={i} activeKey={1}>
                  <Nav.Link eventKey={i} onClick={() => pickedNameHandler(
                    destination.name, 
                    destination.description, 
                    destination.distance, 
                    destination.travel, 
                    destination.images.png
                  )}>{destination.name}</Nav.Link>
              </Nav>
            </div>
            );
          })}
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
        {show ? <DestinationSlider 
                name={name} 
                description={description} 
                distance={distance} 
                travel={travel} 
                image={image}/> :
             <DestinationSlider 
                name={'moon'} 
                description={'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'} 
                distance={'384,400 km'} 
                travel={'3 days'} 
                image={'images/image-moon.png'}/> 
              }
        </div>
      );
  }

export default DestinationCarousel