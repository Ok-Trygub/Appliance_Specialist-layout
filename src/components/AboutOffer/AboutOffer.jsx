import React from 'react';
import './AboutOffer.css';
import DirectionOffer from "../../assets/icons/DirectionOffer";

const AboutOffer = (props) => {
    const {mainImg, offerText} = props;

    return (
        <div className='offerContainerStyle pt-4 md:pt-5 xl:pt-7'>

            <div className='relative'>
                <img src={mainImg} alt="mainImg" className='relative z-50 mx-auto'/>

                <div className='border-[2px] inline-block absolute xl:left-[78px]
                sm:absolute sm:top-[-23px] sm:left-0 md:top-[-15px] md:left-[13px] lg:top-[-38px] lg:left-[-5px] xl:top-[-36px] xl:left-0
                2xl:top-[-47px] 2xl:left-[30px] sm:w-[210px] md:w-[240px] lg:w-[350px] xl:w-[440px] 2xl:w-[520px] z-10 px-2 pt-3
                sm:px-3 sm:pb-5 sm:pt-5 lg:px-6 lg:pt-8 lg:pb-9 xl:px-8 xl:pt-10 xl:pb-9 2xl:px-10
                repairBorder aboutIcon'>
                    {props.children}
                </div>

                <div className='aboutText'>
                    <div className='sm:w-[200px] md:w-[220px] lg:w-[300px] xl:w-[364px] text-white sm:absolute
                    sm:top-[-4px] sm:right-[-68px] md:right-[-48px] xl:right-[-15px]
                    2xl:right-[100px] leading-[8px] sm:leading-[12px] md:leading-[16px] lg:leading-[18px] xl:leading-[24px]
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

export default AboutOffer;