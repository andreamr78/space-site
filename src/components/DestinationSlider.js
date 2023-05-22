import React from 'react';
// import image from '../assets/destination/image-moon.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../sass/DestNav.scss'

function DestinationSlider(props) {
  return (
    <Container className='destinationSlider'> 
      <Row>
        <Col>
          <img src={props.image} id='planet-img'/>
        </Col>
        <Col>
          <h2 id='planet-title'>{props.name}</h2>
          <h2 id='planet-desc'>{props.description}
          <hr className='breakline'/>
          </h2>
          
            <div id='second-row'>
              <Row id='hard-text'><h2 id='primer-texto'>avg distance:</h2> <h2 id='segundo-texto'>Est. Travel time:</h2></Row>
              <Row id='props-text'> <a id='primer-prop'>{props.distance}</a> <a id='segundo-prop'>{props.travel}</a></Row>
            </div>
        </Col>
      </Row>
    </Container>
  )
}

export default DestinationSlider