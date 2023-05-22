import React from 'react';
import { useState } from 'react';
import data from '../assets/shared/data.json'
import '../sass/Crew.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

function CrewCarousel() {
    // const {people} = data;
  return (
    <div className='carousel-div'>
          <Carousel>
            {data.crew.map((person, i) => {
                return(
                    <Carousel.Item key={i} >
                     <Row>
                        <Col id='col-1'>
                          <p id='crew-text'>
                            <h3 className='role'>{person.role}</h3>
                            <h1 className='name'>{person.name}</h1>
                            <p className='bio'>{person.bio}</p>
                          </p>
                       </Col>
                      <Col id='col-2'>
                           <img id='person-img' src={person.images.png}/>
                           </Col>
                        </Row>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    </div>
  )
}

export default CrewCarousel