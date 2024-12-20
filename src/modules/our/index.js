import React from 'react'
import './our.css';
import theImg from '../../assests/image/ourapp.webp';
import downImg from '../../assests/icon/scrollDown.svg';
import JoinImg from '../../assests/image/app.webp';
import bookImg from '../../assests/image/book.webp';
import wideImg from '../../assests/image/Team SIRO in Desert.webp';


export default function Our() {
    return (
        <div>
            <div className='main-our'>
                <div className='our'>
                    <img src={theImg} alt='theimage' />
                </div>
                <div className='container'>
                    <div className='platform animate__animated animate__slideInUp wow' data-wow-offset="250">
                        <p>COMING SOON</p>
                        <h1>The SIRO app</h1>
                        <p>Discover the platform where hospitality meets total wellbeing.</p>
                    </div>
                    <div className='destination-down'>
                        <img src={downImg} alt='downimage' />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='across animate__animated animate__slideInDown wow' data-wow-offset="250">
                    <h2>Curate your journey to wellbeing</h2>
                    <p>The SIRO app is your portal to a seamlessly immersive experience across our destinations. Explore rooms, discover destination fitness, and personalise your stay with special meal plans, select fitness classes and recovery treatments – all in one place.</p>
                </div>

                <div className='main-discover1'>
                    <div className='discover1'>
                        <img src={JoinImg} alt='joinimage' />
                    </div>
                    <div className='discover1-submit animate__animated animate__slideInLeft wow' data-wow-offset="250">
                        <h2>Download the SIRO app</h2>
                        <p>Join the future of fitness + recovery.</p>
                        <p>COMING SOON</p>
                    </div>
                </div>

                <div className='book'>
                    <div className='book1'>
                        <img src={bookImg} alt='bookimage' />
                        <h3>Book and manage your stay</h3>
                        <p>Stay in control of your SIRO journey. Empowering you with ultimate convenience, the SIRO app lets you explore our international destinations, preview rooms, and personalise your experience.</p>
                    </div>
                    <div className='book1'>
                        <img src={bookImg} alt='bookimage' />
                        <h3>Plan for optimal performance</h3>
                        <p>Find, book and try a variety of studio classes, private training or Destination Fitness experiences. Optimise your fitness routine within the SIRO app to actively fuel your path to peak performance.</p>
                    </div>
                </div>
                <div className='lets animate__animated animate__fadeIn wow' data-wow-offset="250">
                    <img src={JoinImg} alt='joinimage' />
                </div>


                <div className='across animate__animated animate__slideInDown wow' data-wow-offset="250">
                    <h2>Revolutionise your recovery</h2>
                    <p>Repair muscles. Enhance sleep. Reduce stress. Improve your wellbeing with a range of treatments led by in-house therapists. From cryotherapy to dry needling and more, tailor your recovery journey through the app.</p>
                </div>

                <div className='book'>
                    <div className='book1'>
                        <img src={bookImg} alt='bookimage' />
                        <h3>Unlock mental clarity</h3>
                        <p>Immerse yourself in the art of mindfulness with private classes, bookable through the app. Step into our Zen Room, where moments of clarity and self-discovery become your sanctuary.</p>
                    </div>
                    <div className='book1'>
                        <img src={bookImg} alt='bookimage' />
                        <h3>Elevate your everyday</h3>
                        <p>Think of our app as your personal wellbeing concierge for a custom SIRO experience. Seamlessly navigate through diverse activities, treatments and menus to shape your optimal day in minutes.</p>
                    </div>
                </div>
                <div className='lets animate__animated animate__fadeIn wow' data-wow-offset="250">
                    <img src={JoinImg} alt='joinimage' />
                </div>

                <div className='across animate__animated animate__slideInDown wow' data-wow-offset="250">
                    <h2>Order macro-friendly meals</h2>
                    <p>Our app makes it effortless to align your nutrition with your fitness regimen; order specialised meal plans that cater to your specific dietary needs. Level up your wellness journey with culinary experiences that guarantee you perform at your best, whether at home or on the road.</p>
                </div>

                <div className='main-wide'>
                    <div className='wide'>
                        <img src={wideImg} alt='wideimage' />
                    </div>
                    <div className='wide-submit animate__animated animate__slideInLeft wow' data-wow-offset="250">
                        <h2>Become a SIRO member</h2>
                        <p>Unlock exclusive fitness, recovery and retail benefits at SIRO destinations worldwide.</p>
                        <button>REGISTER NOW</button>
                        <i>By clicking submit, you are requesting to receive marketing communications from Kerzner International. You agree to our <u>erms and Conditions </u>Tand confirm that you have read and understood the <u>Privacy Policy.</u></i>
                    </div>
                </div>

            </div>

        </div>
    )
}
