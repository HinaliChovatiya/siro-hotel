import React from 'react'
import './app.css';
import C1Logo from '../../../assests/logo/Membership.svg';
import C2Logo from '../../../assests/logo/SIRO.svg';
import stayImg from '../../../assests/image/Team SIRO in Desert.webp';

export default function App() {
    return (
        <div className='container'>
            <div className='member'>
                <div className='join'>
                    <img src={C1Logo} alt='card1logo' />
                    <h2>Become a SIRO member</h2>
                    <p>Join SIRO and unlock a range of exclusive fitness, wellness and retail benefits.
                    </p>
                    <div className='opp'>
                        <button>REGISTER NOW</button>
                    </div>
                </div>

                <div className='join'>
                    <img src={C2Logo} alt='card2logo' />
                    <h2>The SIRO app</h2>
                    <p>Plan your stay and explore fitness activities and recovery treatments with a tap.</p>
                    <div className='opp'>
                        <button>COMING SOON</button>
                    </div>
                </div>
            </div>
            <div className='main-now'>
                <div className='now'>
                    <button>REGISTER NOW</button>
                </div>
                <div className='now'>
                    <button>COMING SOON</button>
                </div>
            </div>


            <div className='main-stay'>
                <div className='stay'>
                    <div className='stay-bg'></div>
                    <img src={stayImg} alt='stayimage' />
                </div>
                <div className='submit animate__animated animate__slideInDown wow' data-wow-offset="250">
                    <h2>Stay connected</h2>
                    <p>Subscribe to our newsletter to receive updates on special events, offers, and more.</p>
                    <button>SUBSCRIBE</button>
                    <i>By clicking submit, you are requesting to receive marketing communications from Kerzner International. You agree to our <u>erms and Conditions </u>Tand confirm that you have read and understood the <u>Privacy Policy.</u></i>
                </div>
            </div>
        </div>
    )
}
