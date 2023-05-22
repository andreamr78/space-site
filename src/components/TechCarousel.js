import React, {useEffect, useState} from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import data from '../assets/shared/data.json'
import '../sass/Tech.scss';

function TechCarousel() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth
  })

  useEffect(() => {
    function handleResize(){
      setDimensions({
        width: window.innerWidth
      });
    }
    window.addEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className='tech-carousel-container'>
    <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
      <Row>
        {data.technology.map((person,i) => {
          return(
            <Container className='container-row'>
              <Col id='col-num'>
                <Nav variant="tabs" className="flex-column">
                  <Nav.Item key={i}>
                    <Nav.Link id='col-num-val' eventKey={i}>{i+1}</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col id='col-info'>
              <Tab.Content>
                <Tab.Pane eventKey={i}>
                {dimensions.width < 780 && <img id='img-landscape' src={person.images.landscape}/>}
                {/* {mobileImage && <img id='img-landscape' src={person.images.landscape}/>} */}
                  <Row className='info-row'>
                    <Col id='info-row-1'>
                      <h1 id='line-1'>the terminology...</h1>
                      <h1 id='line-2'>{person.name}</h1>
                      <h1 id='line-3'>{person.description}</h1>
                      </Col>
                      {dimensions.width > 780 && <Col id='info-row-2'>
                         <img id='img-row' src={person.images.portrait}/>
                        </Col>}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
              </Col>
           </Container>
          );
        })}
      </Row>
    </Tab.Container>
    </div>
  )
}

export default TechCarousel