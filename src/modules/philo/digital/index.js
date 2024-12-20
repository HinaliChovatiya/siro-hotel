import React from 'react'
import './digital.css';
import masterImg from '../../../assests/image/siro-Fitness Programs 1.webp';
import master1Img from '../../../assests/image/SIRO One Za_abeel Dubai-Intro.jpg';
import C1Logo from '../../../assests/logo/Membership.svg';
import C2Logo from '../../../assests/logo/SIRO.svg';

export default function Digital() {
    return (
        <div className='container'>
            <div className='digital animate__animated animate__slideInDown wow' data-wow-offset="250">
                <h2>A digitally driven experience</h2>
                <p>At SIRO, your path to wellbeing is powered by technology. Our tech-forward approach ensures that you can personalise your SIRO journey before, during and after your stay. From body composition analysis to a seamless app tailored to you, every aspect of your SIRO experience is cutting-edge, seamless and accessible.</p>
            </div>
            <div className='tech'>
                <div className='tech1'>
                    <img src={masterImg} alt='masterimage' />
                </div>
                <div className='tech2'>
                    <img src={master1Img} alt='master1image' />
                </div>
            </div>

            <div className='java'>
                <div className='java1'>
                    <img src={C1Logo} alt='card1logo' />
                    <h2>Become a SIRO member</h2>
                    <p>java1 SIRO and unlock a range of exclusive fitness, wellness and retail benefits.
                    </p>
                    <div className='up1'>
                        <button>REGISTER NOW</button>
                    </div>
                </div>

                <div className='java1'>
                    <img src={C2Logo} alt='card2logo' />
                    <h2>The SIRO app</h2>
                    <p>Plan your stay and explore fitness activities and recovery treatments with a tap.</p>
                    <div className='up1'>
                        <button>REGISTER NOW</button>
                    </div>
                </div>
            </div>
            <div className='main-up'>
                <div className='up'>
                    <button>REGISTER NOW</button>
                </div>
                <div className='up'>
                    <button>COMING SOON</button>
                </div>
            </div>
        </div>
    )
}
