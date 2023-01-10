import React from 'react';
import './ServicesOffer.css';
import DirectionOffer from "../../assets/icons/DirectionOffer";

const ServicesOffer = (props) => {
    const {mainImg, offerText} = props;

    return (
        <div className='offerContainerStyle pt-4 md:pt-5 lg:top-2 xl:pt-7'>

            <div className='relative'>
                <img src={mainImg} alt="mainImg" className='relative z-50 mx-auto'/>

                <div className='border-[2px] inline-block absolute xl:left-[78px]
                sm:absolute sm:top-[-12px] sm:left-[-6px] md:top-[-10px] md:left-[-14px] lg:top-[-25px] lg:left-[-10px] xl:top-[-35px] xl:left-[-10px]
                2xl:top-[-25px] 2xl:left-[80px] sm:w-[240px] md:w-[290px] lg:w-[390px] xl:w-[500px] 2xl:w-[520px] z-10 px-2 pt-3
                sm:px-3 sm:pb-5 sm:pt-5 lg:px-6 lg:pt-8 lg:pb-9 xl:px-10 xl:pt-12 xl:pb-12
                repairBorder servicesIcon'>
                    {props.children}
                </div>

                <div className='servicesText'>
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

export default ServicesOffer;