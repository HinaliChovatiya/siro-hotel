import React from 'react'
import './the.css';
import theImg from '../../assests/image/the.webp';
import read1Img from '../../assests/image/card1.webp';
import read2Img from '../../assests/image/card2.webp';
import read3Img from '../../assests/image/card3.webp';
import downImg from '../../assests/icon/scrollDown.svg';



export default function The() {
    return (
        <div>
            <div className='hello-mate'>
                <div className='mate'>
                    <img src={theImg} alt='theimage' />
                </div>

                <div className='container'>
                    <div className='Journal animate__animated animate__slideInUp wow' data-wow-offset="250">
                        <h1>The Journal</h1>
                        <p>The ultimate destination for SIRO's latest news and exclusive content.</p>
                    </div>
                    <div className='destination-down'>
                        <img src={downImg} alt='downimage' />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='into'>
                    <p className='animate__animated animate__slideInDown wow' data-wow-offset="250">Welcome to The Journal, your portal into the world of SIRO. Discover in-depth insights into Team SIRO, dive into the latest SIRO news, and access exclusive content. Stay informed, stay inspired and stay connected with The Journal.</p>
                </div>

                <div className='main-active'>
                    <div className='active'>
                        <img src={read1Img} alt='read1image' />
                        <span>SIRO CAMPAIGN</span>
                        <h4>Dubai’s ultimate active lifestyle hotel</h4>
                        <button>READ MORE</button>
                    </div>
                    <div className='active'>
                        <img src={read2Img} alt='read2image' />
                        <span>SIRO CAMPAIGN</span>
                        <h4>Dubai’s ultimate active lifestyle hotel</h4>
                        <button>READ MORE</button>
                    </div>
                    <div className='active'>
                        <img src={read3Img} alt='read3image' />
                        <span>SIRO CAMPAIGN</span>
                        <h4>Dubai’s ultimate active lifestyle hotel</h4>
                        <button>READ MORE</button>
                    </div>
                    <div className='active'>
                        <img src={read3Img} alt='read3image' />
                        <span>SIRO CAMPAIGN</span>
                        <h4>Dubai’s ultimate active lifestyle hotel</h4>
                        <button>READ MORE</button>
                    </div>
                    <div className='active'>
                        <img src={read1Img} alt='read1image' />
                        <span>SIRO CAMPAIGN</span>
                        <h4>Dubai’s ultimate active lifestyle hotel</h4>
                        <button>READ MORE</button>
                    </div>
                    <div className='active'>
                        <img src={read2Img} alt='read2image' />
                        <span>SIRO CAMPAIGN</span>
                        <h4>Dubai’s ultimate active lifestyle hotel</h4>
                        <button>READ MORE</button>
                    </div>
                    <div className='active'>
                        <img src={read3Img} alt='read3image' />
                        <span>SIRO CAMPAIGN</span>
                        <h4>Dubai’s ultimate active lifestyle hotel</h4>
                        <button>READ MORE</button>
                    </div>
                    <div className='active'>
                        <img src={read1Img} alt='read1image' />
                        <span>SIRO CAMPAIGN</span>
                        <h4>Dubai’s ultimate active lifestyle hotel</h4>
                        <button>READ MORE</button>
                    </div>
                    <div className='active'>
                        <img src={read2Img} alt='read2image' />
                        <span>SIRO CAMPAIGN</span>
                        <h4>Dubai’s ultimate active lifestyle hotel</h4>
                        <button>READ MORE</button>
                    </div>
                    <div className='active'>
                        <img src={read3Img} alt='read3image' />
                        <span>SIRO CAMPAIGN</span>
                        <h4>Dubai’s ultimate active lifestyle hotel</h4>
                        <button>READ MORE</button>
                    </div>
                </div>

            </div>


        </div>
    )
}
