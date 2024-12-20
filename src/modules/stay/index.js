import React from 'react'
import memberImg from '../../assests/image/book.webp';
import downImg from '../../assests/icon/scrollDown.svg';
import './stay.css';

export default function Stay() {
    return (
        <div>
            <div className='bg-stay'>
                <div className='ok-stay'></div>
                <div className='stay'>
                    <img src={memberImg} alt='memberimage' />
                </div>

                <div className='container'>
                    <div className='keep animate__animated animate__slideInUp wow' data-wow-offset="250">
                        <h1>Stay connected</h1>
                        <p>Keep up with the latest SIRO news and updates.</p>
                    </div>
                    <div className='keep-down'>
                        <img src={downImg} alt='downimage' />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='register1'>
                    <h2>Register for a SIRO membership</h2>
                    <p>Join the SIRO journey and be the first to receive updates on our hotels, programmes and more.</p>
                </div>

                <div className='main-form'>
                    <div className='form11'>
                        <label>First Name*</label>
                        <input type='text' placeholder='first name' />
                    </div>
                    <div className='form11'>
                        <label>Last Name*</label>
                        <input type='text' placeholder='last name' />
                    </div>
                    <div className='form11'>
                        <label>Email*</label>
                        <input type='text' placeholder='Email' />
                    </div>
                    <div className='form11-11'>
                        <label>Phone*</label>
                        <div className='form12'>
                            <select>
                                <option>India</option>
                                <option>India</option>
                                <option>India</option>
                                <option>India</option>
                            </select>
                            <input type='text' placeholder='phone' />
                        </div>
                    </div>
                </div>
                <div className='by1'>
                    <p>By clicking submit, you are requesting to receive marketing communication from Kerzner International, agreeing to our Terms and Conditions and confirming you have read and understood the Privacy Policy.</p>
                </div>
                <div className='sub1'>
                    <button>SUBMIT</button>
                </div>

            </div>
        </div>
    )
}
