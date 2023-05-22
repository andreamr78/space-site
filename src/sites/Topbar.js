import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../sass/Navbar.scss'
import {LinkContainer} from 'react-router-bootstrap'

function Topbar() {
  return (
    <>
    {['sm'].map((expand) => (
      <Navbar key={expand}  expand={expand} className="mb-3" variant="dark">
        <Container fluid id='nav-container'>
          <Navbar.Brand href="#">
            <svg id='icon' xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
          </Navbar.Brand>
          <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3" id='link-container'>
            <svg id='line' width="473" height="1" viewBox="0 0 473 1" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.251485" width="473" height="1" fill="white"/></svg>
              <LinkContainer to="/"><Nav.Link href="#"><span>00</span> HOME</Nav.Link></LinkContainer>
              <LinkContainer to="/Destination"><Nav.Link href="#"><span>01</span> DESTINATION</Nav.Link></LinkContainer>
              <LinkContainer to="/Crew"><Nav.Link href="#"><span>02</span> CREW</Nav.Link></LinkContainer>
              <LinkContainer to="/Tech"><Nav.Link href="#"><span>03</span> TECHNOLOGY</Nav.Link></LinkContainer>
                </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
  )
}

export default Topbar