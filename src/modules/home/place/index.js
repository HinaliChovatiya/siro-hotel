import React from 'react'
import './place.css';
import lifeVideo from '../../../assests/video/lifestyle.mp4';
import playImg from '../../../assests/icon/pauseButton.svg';

export default function Place() {
    return (
        <div>
            <div className='nature'>
                <div className='boka'>
                    <div className='mainboka'></div>
                    <video src={lifeVideo} autoPlay={true} loop muted />
                </div>
                <div className='container'>
                    <div className='mont animate__animated animate__slideInUp wow' data-wow-offset="250">
                        <p>OUR HOTELS</p>
                        <h1 >SIRO Boka Place, Montenegro</h1>
                        <span>Experience a haven of nature, adventure and wellbeing at this coastal SIRO destination. Opening soon.</span>
                        <button>EXPLORE</button>
                    </div>
                    <div className='pal'>
                        <img src={playImg} alt='playimage' />
                    </div>
                </div>
            </div>

            <div className='nature'>
                <div className='boka1'>
                    <div className='mainboka'></div>
                    <video src={lifeVideo} autoPlay={true} loop muted />
                </div>
                <div className='container'>
                    <div className='mont animate__animated animate__slideInUp wow' data-wow-offset="250">
                        <p>SIRO HOTELS</p>
                        <h1 >SIRO Olaya and SIRO Palmilla</h1>
                        <span>Growing our global reach with the addition of two new SIRO destinations - Saudi Arabia and Mexi</span>
                        <button>EXPLORE</button>
                    </div>
                    <div className='pal'>
                        <img src={playImg} alt='playimage' />
                    </div>
                </div>
            </div>
        </div>
    )
}
