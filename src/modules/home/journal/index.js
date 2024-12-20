import React from 'react'
import './journal.css';
import leftIcon from '../../../assests/icon/leftArrowBlack.svg';
import rightIcon from '../../../assests/icon/rightArrowBlack.svg';
import card1Img from '../../../assests/image/card1.webp';
import card2Img from '../../../assests/image/card2.webp';
import card3Img from '../../../assests/image/card3.webp';
import globImg from '../../../assests/image/international.jpg';

export default function Journal() {
    return (
        <div className='container'>
            <div className='siro'>
                <div className='dubai'>
                    <h2>
                        SIRO Journal
                    </h2>
                </div>
                <div className='style'>
                    <img src={leftIcon} alt='lefticon' />
                    <span>1 / 10</span>
                    <img src={rightIcon} alt='righticon' />
                </div>
            </div>
            <div className='main-more'>
                <div className='more'>
                    <img src={card1Img} alt='card1image'/>
                    <span>SIRO CAMPAIGN</span>
                    <h4>Dubai’s ultimate active lifestyle hotel</h4>
                    <button>READ MORE</button>
                </div>
                <div className='more'>
                    <img src={card2Img} alt='card2image'/>
                    <span>SIRO CAMPAIGN</span>
                    <h4>Dubai’s ultimate active lifestyle hotel</h4>
                    <button>READ MORE</button>
                </div>
                <div className='more'>
                    <img src={card3Img} alt='card3image'/>
                    <span>SIRO CAMPAIGN</span>
                    <h4>Dubai’s ultimate active lifestyle hotel</h4>
                    <button>READ MORE</button>
                </div>
            </div>

            <div className='main-glob'>
                <div className='glob'>
                    <div className='glob-bg'></div>
                    <img src={globImg} alt='globimage'/>
                </div>
                <div className='rare animate__animated animate__slideInLeft wow' data-wow-offset="250">
                    <h2>A hotel by Kerzner International</h2>
                    <p>Kerzner International is a globally renowned leader in the development and operation of destination resorts, ultra-luxury hotels, and exclusive private homes. Since 1993, Kerzner has expanded its iconic brand collection to include One&Only, Atlantis, SIRO, and Rare Finds.</p>
                    <button>LEARN MORE</button>
                </div>
            </div> 
        </div>
    )
}
