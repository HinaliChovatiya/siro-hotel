import React from 'react'
import './membership.css';
import memberImg from '../../assests/image/member.jpg';
import downImg from '../../assests/icon/scrollDown.svg';
import JoinImg from '../../assests/image/international.jpg';
import leftyIcon from '../../assests/icon/leftArrowBlack.svg';
import rightyIcon from '../../assests/icon/rightArrowBlack.svg';
import card11Img from '../../assests/image/card1.webp';



export default function Membership() {
    return (
        <div>
            <div className='main-member1'>
                <div className='member1'>
                    <img src={memberImg} alt='memberimage' />
                </div>

                <div className='container'>
                    <div className='peak animate__animated animate__slideInUp wow' data-wow-offset="250">
                        <h1>Become a SIRO member</h1>
                        <p>Start your journey to peak performance.</p>
                    </div>
                    <div className='peak-down'>
                        <img src={downImg} alt='downimage' />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='live animate__animated animate__slideInDown wow' data-wow-offset="250">
                    <h2>A global wellness collective</h2>
                    <p>Join a global collective of people dedicated to unlocking their full potential. Beyond connecting you with a dynamic community, the SIRO membership offers exclusive benefits that empower you to live without compromise.</p>
                </div>


                <div className='main-all'>
                    <div className='all'>
                        <img src={JoinImg} alt='joinimage' />
                    </div>
                    <div className='all-submit animate__animated animate__slideInLeft wow' data-wow-offset="250">
                        <h2>Join the SIRO movement</h2>
                        <p>Unlock exclusive benefits on hotel stays, wellbeing experiences and retail across all SIRO destinations worldwide.</p>
                    </div>
                </div>

                <div className='register'>
                    <h2>Register for a SIRO membership</h2>
                </div>
                <div className='form'>
                    <div className='form1'>
                        <label>First Name*</label>
                        <input type='text' placeholder='first name' />
                    </div>
                    <div className='form1'>
                        <label>Last Name*</label>
                        <input type='text' placeholder='last name' />
                    </div>
                    <div className='form1'>
                        <label>Email*</label>
                        <input type='text' placeholder='Email' />
                    </div>
                    <div className='form1'>
                        <label>Phone*</label>
                        <div className='form2'>
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
                <div className='by'>
                    <p>By clicking submit, you are requesting to receive marketing communication from Kerzner International, agreeing to our Terms and Conditions and confirming you have read and understood the Privacy Policy.</p>
                </div>
                <div className='sub'>
                    <button>SUBMIT</button>
                </div>

                <div className='siro1'>
                    <div className='dubai1'>
                        <h2>
                            Members' benefits
                        </h2>
                    </div>
                    <div className='style1'>
                        <img src={leftyIcon} alt='lefticon' />
                        <span>1 / 10</span>
                        <img src={rightyIcon} alt='righticon' />
                    </div>
                </div>
                <div className='main-lab'>
                    <div className='lab'>
                        <img src={card11Img} alt='card1image' />
                        <h4>Fitness Lab access</h4>
                    </div>
                    <div className='lab'>
                        <img src={card11Img} alt='card1image' />
                        <h4>Fitness Lab access</h4>
                    </div>
                    <div className='close'>
                        <div className='lab'>
                            <img src={card11Img} alt='card1image' />
                            <h4>Fitness Lab access</h4>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
