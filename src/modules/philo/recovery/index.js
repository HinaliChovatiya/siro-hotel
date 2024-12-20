import React from 'react'
import './recovery.css';
import masterImg from '../../../assests/image/siro-Fitness Programs 1.webp';
import master1Img from '../../../assests/image/SIRO One Za_abeel Dubai-Intro.jpg';
import foodImg from '../../../assests/icon/siro-brandcampaign-food-9927.webp';


export default function Recovery() {
    return (
        <div className='ok'>
            <div className='container'>
                <div className='recovery animate__animated animate__slideInDown wow' data-wow-offset="250">
                    <h2>Recovery</h2>
                    <p>Tap into the power of SIRO Recovery Labs for ultimate healing. Equipped with state-of-the-art technology, our therapists formulate precise recovery plans tailored to you. Experience a spectrum of treatments including cryotherapy, red light therapy, sports massages, dry needling, and more, all designed to supercharge your journey to recovery.</p>
                </div>
                <div className='formula'>
                    <div className='formula1'>
                        <img src={masterImg} alt='masterimage' />
                    </div>
                    <div className='formula2'>
                        <img src={master1Img} alt='master1image' />
                    </div>
                </div>
            </div>
            <div className='mind'>
                <img src={foodImg} alt='foodimage' />
            </div>
            <div className='container'>
                <div className='full animate__animated animate__slideInDown wow' data-wow-offset="250">
                    <h2>Mindfulness</h2>
                    <p>Our methodology is designed to elevate both mind and body. In addition to fitness, recovery and nutrition specialists, SIRO offers access to mindfulness coaches for a holistic approach to wellbeing. Master the art of breathwork, dive into meditation in our Zen Room and nurture your mental acuity.</p>
                </div>
                <div className='offer'>
                    <div className='offer1'>
                        <img src={masterImg} alt='masterimage' />
                    </div>
                    <div className='offer2'>
                        <img src={master1Img} alt='master1image' />
                    </div>
                </div>
            </div>
            <div className='mind'>
                <img src={foodImg} alt='foodimage' />
            </div>
        </div>
    )
}
