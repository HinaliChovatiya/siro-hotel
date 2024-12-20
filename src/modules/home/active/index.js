import React from 'react'
import './active.css';
import lifeVideo from '../../../assests/video/lifestyle.mp4';
import playImg from '../../../assests/icon/pauseButton.svg';
import downImg from '../../../assests/icon/scrollDown.svg';
import siroImg from '../../../assests/image/siro-brand.webp';

export default function Active() {
  return (
    <div>
      <div className='life'>
        <div className='mainlife'>
        </div>
        <video src={lifeVideo} autoPlay={true} loop muted />
      </div>
      <div className='container'>
        <div className='step animate__animated animate__slideInUp wow' data-wow-offset="250">
          <p>SIRO ONE ZA'ABEEL</p>
          <h1 >The ultimate active lifestyle + business hotel</h1>
          <span>Stay in the heart of Dubai, steps away from Dubai World Trade Centre.</span>
          <button>EXPLORE</button>
        </div>
        <div className='step2'>
          <img src={playImg} alt='playimage' />
        </div>
        <div className='down'>
          <img src={downImg} alt='downimage' />
        </div>
      </div>


      <div className='team'>
        <div className='power'>
          <div className='mainpower'>
          </div>
          <img src={siroImg} alt='siroimage' />
        </div>
        <div className='container'>
          <div className='train animate__animated animate__slideInUp wow' data-wow-offset="250">
            <p>TEAM SIRO</p>
            <h2 >Powered by champions</h2>
            <span>rain, recover, and nourish your body with expert support while travelling. Every aspect of your SIRO hotel stay has been designed with insight from Team SIRO, a group of world-class athletes and international wellbeing experts.</span>
            <button>MEET TEAM SIRO</button>
          </div>
        </div>
      </div>
    </div>

  )
}
