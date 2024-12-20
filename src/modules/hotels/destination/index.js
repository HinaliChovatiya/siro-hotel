import React from 'react'
import './destination.css';
import destinationImg from '../../../assests/image/destination.webp';
import downImg from '../../../assests/icon/scrollDown.svg';
import stayImg from '../../../assests/image/discover.webp';


export default function Destination() {
    return (
        <div>
            <div className='hello-mount'>
                <div className='mount'>
                    <div className='main-mount'>
                    </div>
                    <img src={destinationImg} alt='destinationimage' />
                </div>
                <div className='container'>
                    <div className='unlock animate__animated animate__slideInUp wow' data-wow-offset="250">
                        <h1>Our destinations</h1>
                        <p>Located between cityscapes, coastlines and mountainous landscapes, SIRO hotels empower you to unlock your potential, no matter where you are</p>
                    </div>
                    <div className='destination-down'>
                        <img src={downImg} alt='downimage' />
                    </div>
                </div>
                </div>

                <div className='container'>
                    <div className='main-discover'>
                        <div className='discover'>
                            <img src={stayImg} alt='stayimage' />
                        </div>
                        <div className='discover-submit animate__animated animate__slideInLeft wow' data-wow-offset="250">
                            <h2>SIRO One Za’abeel, Dubai</h2>
                            <p>Dubai’s first fully integrated fitness + recovery hotel. Now open.</p>
                            <button>DISCOVER</button>
                        </div>
                    </div>

                    <div className='main-discover'>
                        <div className='discover'>
                            <div className='discover-bg'></div>
                            <img src={stayImg} alt='stayimage' />
                        </div>
                        <div className='discover-submit animate__animated animate__slideInLeft wow' data-wow-offset="250">
                            <h2>SIRO Boka Place, Montenegro</h2>
                            <p>Experience a haven of nature, adventure and wellbeing at this coastal SIRO destination. Opening soon.</p>
                            <button>DISCOVER</button>
                        </div>
                    </div>

                    <div className='main-discover'>
                        <div className='discover'>
                            <div className='discover-bg'></div>
                            <img src={stayImg} alt='stayimage' />
                        </div>
                        <div className='discover-submit animate__animated animate__slideInLeft wow' data-wow-offset="250">
                            <h2>SIRO Olaya, Riyadh</h2>
                            <p>Nestled within the illustrious Olaya district, this destination boasts world-class fitness and recovery amenities that cater to all your needs in Riyadh's dynamic city centre.</p>
                            <p>Coming soon.</p>
                        </div>
                    </div>

                    <div className='main-discover'>
                        <div className='discover'>
                            <div className='discover-bg'></div>
                            <img src={stayImg} alt='stayimage' />
                        </div>
                        <div className='discover-submit animate__animated animate__slideInLeft wow' data-wow-offset="250" >
                            <h2>SIRO Palmilla, Mexico</h2>
                            <p>Situated on the southern tip of Mexico's Baja Peninsula in Los Cabos, SIRO Palmilla provides guests with striking surroundings to elevate their wellbeing journey.</p>
                            <p>Coming soon.</p>
                        </div>
                    </div>
                </div>
           
        </div>

    )
}
