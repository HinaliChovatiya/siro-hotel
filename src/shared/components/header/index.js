import React from 'react'
import './header.css';
import hotelLogo from '../../../assests/logo/SIROlogo.svg';
import menuIcon from '../../../assests/icon/icons8-menu.svg';

export default function Header() {
    return (
        <div className='hide'>
            <div className='hotel-bg'>

                <div className='main-hotel'>
                    <div className='hotel'>
                        <a>Hotels</a>
                        <a>Our Philosophy</a>
                        <a>The Journal</a>
                        <a>Our App</a>
                    </div>
                    <div className='hotel-logo'>
                        <img src={hotelLogo} alt='hotellogo' />
                    </div>
                    <div className='hotel'>
                        <a>Membership</a>
                        <a>Stay Connected</a>
                        <a>Contact Us</a>
                        <div className='hotel1'>
                            <button>BOOK</button>
                        </div>
                    </div>
                </div>
                <div className='header1'>
                    <div className='menu-icon'>
                        <img src={menuIcon} alt='menuicon' />
                    </div>
                    <div className='hotel-logo'>
                        <img src={hotelLogo} alt='hotellogo' />
                    </div>
                    <div className='hotel11'>
                        <button>BOOK</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
