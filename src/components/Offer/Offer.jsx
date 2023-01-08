import React from 'react';
import './Offer.css';
import DirectionOffer from '../../assets/icons/DirectionOffer';


const Offer = (props) => {
    const {mainImg, offerText} = props;


    return (
        <div className='mx-auto container mx-auto px-5 md:px-7 lg:px-8 xl:px-6'>

            <div className='relative'>
                <img src={mainImg} alt="mainImg" className='relative z-50'/>

                <div className='border-[2px] inline-block absolute xl:left-[78px]
                sm:absolute sm:top-0 sm:left-[28px] md:top-[6px] md:left-[38px] lg:top-[5px] xl:top-[10px] xl:left-[63px]
                2xl:top-[16px] 2xl:left-[73px] sm:w-[210px] md:w-[240px] lg:w-[350px] xl:w-[440px] 2xl:w-[520px] z-10 px-2 pt-3
                sm:px-3 sm:pb-5 sm:pt-6 md:pb-6 lg:px-7 lg:pt-8 lg:pb-9 xl:px-9 xl:pt-10 xl:pb-11 2xl:px-10 2xl:pt-12 2xl:pb-12
                repairBorder leftSideImg'>
                    {props.children}
                </div>

                <div className='offerText'>
                    <div className='sm:w-[200px] md:w-[220px] lg:w-[300px] xl:w-[364px] text-white sm:absolute
                    sm:top-[-8px] sm:right-[-86px] md:right-[-66px] lg:right-[-60px] xl:top-[4px] xl:right-[-19px]
                    2xl:right-[80px] leading-[8px] sm:leading-[12px] md:leading-[16px] lg:leading-[18px] xl:leading-[24px]
                    text-[6px] sm:text-[10px] md:text-[11px] lg:text-[15px] xl:text-[18px]'>
                        <p className='pb-0.5 sm:pb-1 lg:pb-2 xl:pb-3'>{offerText}</p>
                        <div className='w-[10px] h-[10px] md:w-[16px] md:h-[16px]
                        lg:w-[20px] lg:h-[20px] xl:w-[31px] xl:h-[31px]'>
                            <DirectionOffer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;