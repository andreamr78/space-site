import React from 'react';
import '../sass/Destination.scss';
import Topbar from './Topbar';
import DestinationCarousel from '../components/DestinationCarousel';

function Destination() {
  return (
    <div className='destination-container'>
      <Topbar/>
      <p><b>01</b>pick your destination</p>
      <DestinationCarousel/>
    </div>
  )
}

export default Destination