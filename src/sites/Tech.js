import React from 'react';
import Topbar from './Topbar';
import TechCarousel from '../components/TechCarousel';
import '../sass/Tech.scss';

function Tech() {
  return (
    <div className='tech-container'>
      <Topbar/>
      <p><b>03</b>space launch 101</p>
      <TechCarousel/>
    </div>
  )
}

export default Tech