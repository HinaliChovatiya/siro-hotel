import React from 'react'
import './footer.css';
import iconplus from '../../../assests/icon/icons8-plus.svg';

export default function Footer() {
    return (
        <div className='out-div'>
            <div className='container'>
                <div className='term'>
                    <div className='up'>
                        <h5>Connect</h5>
                        <a>Instagram</a>
                    </div>
                    <div className='up'>
                        <h5>News</h5>
                        <a>Media</a>
                    </div>
                    <div className='up'>
                        <h5>Terms & Conditions</h5>
                        <a>Website Terms</a>
                        <a>Global Privacy Policy</a>
                        <a>Payment and Cancellation Policy</a>
                    </div>
                    <div className='up'>
                        <a id='different'>Kerzner</a>
                        <a>Atlantis</a>
                        <a>One&Only</a>
                        <a>Rare Finds</a>
                        <a>Careers</a>
                    </div>
                    <div className='up'>
                        <h5>Stay Connected</h5>
                        <button>Sign Up Now</button>
                    </div>
                </div>
                <div className='limit'>
                    <select>
                        <option>English</option>
                        <option>Gujrati</option>
                        <option>Hindi</option>
                    </select>
                    <p>2024 © Kerzner International Limited. All Rights Reserved.</p>
                </div>

                <div className='left'>
                    <h5>Stay Connected</h5>
                    <button>SIGN UP NOW</button>
                </div>
                <div className='main-to'>
                    <div className='to1'>
                        <h5>Connect</h5>
                    </div>
                    <div className='to2'>
                        <img src={iconplus} alt='iconplus' />
                    </div>
                </div>
                <div className='main-to'>
                    <div className='to1'>
                        <h5>News</h5>
                    </div>
                    <div className='to2'>
                        <img src={iconplus} alt='iconplus' />
                    </div>
                </div>
                <div className='main-to'>
                    <div className='to1'>
                        <h5>Terms & Conditions</h5>
                    </div>
                    <div className='to2'>
                        <img src={iconplus} alt='iconplus' />
                    </div>
                </div>
                <div className='main-to'>
                    <div className='to1'>
                        <h5>Kerzner</h5>
                    </div>
                    <div className='to2'>
                        <img src={iconplus} alt='iconplus' />
                    </div>
                </div>
                <div className='num'>
                    <select>
                        <option>English</option>
                        <option>Gujrati</option>
                        <option>Hindi</option>
                    </select>
                    <p>2024 © Kerzner International Limited. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}
