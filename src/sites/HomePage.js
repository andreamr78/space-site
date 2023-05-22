import React from 'react'
import '../sass/HomePage.scss'
import Topbar from './Topbar';

const siteText = [
  {
    title: 'So, you want to travel to',
    bold: 'Space',
    info: 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!' 
  }
];

function HomePage() {
  // console.log(siteText);
  return (
    <div className='home-site'>
        <Topbar/>
        {siteText.map((text, i) => (
        <div className="content" key={i}>
          <p id='title'>{text.title}</p>
          <p id='bold'>{text.bold}</p>
          <p id='info'>{text.info}</p>
        </div>
      ))}

      <div className='content-right'>
        <div id='circle'>
          <p>Explore</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage