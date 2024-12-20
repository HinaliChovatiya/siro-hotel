import React from 'react'
import './philosopy.css';
import philoImg from '../../../assests/image/Our Philosophy Hero Banner.webp';
import blackImg from '../../../assests/image/philo1.webp';

export default function Philosopy() {
    return (
        <div className='connect'>
            <img src={philoImg} alt='philosopyimage' />
            <div className='container'>
                <div className='connect1'>
                    <h1 className='animate__animated animate__slideInUp wow' data-wow-offset="250">Our philosophy</h1>
                </div>
                <div className='fitness animate__animated animate__slideInDown wow' data-wow-offset="250">
                    <h2>The future of fitness + recovery in a hotel</h2>
                    <p>SIRO is the ultimate hotel for an active lifestyle. Our international destinations are built to offer a complete experience under one roof. With rooms designed to ease jet lag, the world's best hotel gyms, personalised dining experiences, and rejuvenating treatments at our Recovery Labs, every SIRO hotel ensures you can travel without compromise.</p>
                </div>
                <div className='black'>
                    <img src={blackImg} alt='blackimage' />
                </div>
                
            </div>
        </div>
    )
}
