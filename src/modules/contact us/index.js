import React from 'react'
import './contact us.css';
import contactImg from '../../assests/image/contact.webp';
import downImg from '../../assests/icon/scrollDown.svg';
import callIcon from '../../assests/icon/phone_icon.svg';
import mailIcon from '../../assests/icon/email_icon.svg';

export default function Contact() {
    return (
        <div>
            <div className='hello-contact'>
                <div className='bg-contact'></div>
                <div className='contact'>
                    <img src={contactImg} alt='contactimage' />
                </div>
                <div className='container'>
                    <div className='today animate__animated animate__slideInUp wow' data-wow-offset="250">
                        <h1>Contact us</h1>
                        <p>Got questions? Connect with our team today.</p>
                    </div>
                    <div className='today-down'>
                        <img src={downImg} alt='downimage' />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='main-room animate__animated animate__fadeIn wow' data-wow-offset="250">
                    <div className='room1'>
                        <div className='room1-text'>
                            <img src={callIcon} alt='phoneicon' />
                            <h2>Call us</h2>
                            <p>General enquiries: +971 4 666 1717</p>
                            <p> Room bookings: +971 4 666 1700</p>
                        </div>
                    </div>
                    <div className='room1'>
                        <div className='room1-text'>
                            <img src={mailIcon} alt='mailicon' />
                            <h2>Send us an email</h2>
                            <p> info.onezaabeel@sirohotels.com</p>
                        </div>
                    </div>
                </div>
                <div className='main-one'>
                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.394477010654!2d55.288034374811346!3d25.22815183044731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d6f522d169%3A0x18b2c982ea98d0c1!2sSIRO%20One%20Za&#39;abeel!5e1!3m2!1sen!2sin!4v1725516339766!5m2!1sen!2sin" width="100%" height="850" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='one'>
                        <div className='bg-one'>
                            <h3>SIRO One Za’abeel, Dubai</h3>
                            <p>Za'abeel - Za'abeel 1,Dubai, United Arab Emirates</p>
                        </div>
                        <div className='bg-one'>
                            <h3>SIRO One Za’abeel, Dubai</h3>
                            <p>Za'abeel - Za'abeel 1,Dubai, United Arab Emirates</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
