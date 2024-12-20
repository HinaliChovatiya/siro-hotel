import React from 'react'
import './fit.css';
import masterImg from '../../../assests/image/siro-Fitness Programs 1.webp';
import master1Img from '../../../assests/image/SIRO One Za_abeel Dubai-Intro.jpg';
import healthImg from '../../../assests/image/main1.webp';
import health1Img from '../../../assests/image/main2.webp';
import health2Img from '../../../assests/image/main3.webp';
import foodImg from '../../../assests/icon/siro-brandcampaign-food-9927.webp';

export default function Fit() {
    return (
        <div className='container'>
            <div className='caps animate__animated animate__slideInDown wow' data-wow-offset="250">
                <h2>Fitness</h2>
                <p>SIRO’s workout programmes and spaces are built around a functional training methodology that supports you through each stage of your fitness journey. Every hotel is equipped with Master Trainers, a digitally integrated Fitness Lab and Destination Fitness activities that take active living beyond hotel grounds. Discover new cities from a unique perspective while reaching your fitness goals at SIRO.</p>
            </div>
            <div className='master'>
                <div className='master1'>
                    <img src={masterImg} alt='masterimage' />
                </div>
                <div className='master2'>
                    <img src={master1Img} alt='master1image' />
                </div>
            </div>
            <div className='health-item'>
                <div className='health'>
                    <img src={healthImg} alt='healthimage' />
                </div>
                <div className='health'>
                    <img src={health1Img} alt='healthimage' />
                </div>
                <div className='health'>
                    <img src={health2Img} alt='healthimage' />
                </div>
            </div>
            <div className='nutrition animate__animated animate__slideInDown wow' data-wow-offset="250">
                <h2>Nutrition</h2>
                <p>We deliver a personalised culinary experience tailored to your health journey. At SIRO, you can construct your own modular meal plan or consult with our in-house nutritionist for expert guidance. Our menus feature calorie counts and a diverse range of meal choices, all crafted with high quality, homegrown ingredients that support your wellbeing and our local communities.</p>
            </div>
            <div className='food'>
                <img src={foodImg} alt='foodimage' />
            </div>
            <div className='sleep animate__animated animate__slideInDown wow' data-wow-offset="250">
                <h2>Sleep</h2>
                <p>Quality rest is a key component of holistic health. SIRO guest rooms and suites feature recovery equipment, thermoregulation-enhancing cooling mattresses, and integrated technology that boosts relaxation, mitigates jet lag and delivers the ideal environment for restorative sleep.</p>
            </div>
            <div className='food'>
                <img src={foodImg} alt='foodimage' />
            </div>
            <div className='health-item'>
                <div className='health'>
                    <img src={healthImg} alt='healthimage' />
                </div>
                <div className='health'>
                    <img src={health1Img} alt='healthimage' />
                </div>
                <div className='health'>
                    <img src={health2Img} alt='healthimage' />
                </div>
            </div>
        </div>
    )
}
