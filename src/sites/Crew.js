import React from 'react'
import Topbar from './Topbar';
import '../sass/Crew.scss';
import CrewCarousel from '../components/CrewCarousel';

function Crew() {
  return (
    <div className='crew-container'>
      <Topbar/>
      <p className='crew-uppertext'><b>02</b>meet your crew</p>
      <CrewCarousel/>
    </div>
  )
}

export default Crew