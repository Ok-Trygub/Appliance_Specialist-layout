import React from 'react';
import DirectionOffer from "../../assets/icons/DirectionOffer";
import './ReviewOffer.css';

const ReviewOffer = (props) => {
    const {mainImg, offerText, person} = props;

    return (
        <div className='offerContainerStyle pt-6 sm:pt-10 md:pt-24 lg:pt-16 xl:pt-24'>

            <div className='relative'>
                <img src={mainImg} alt="mainImg" className='relative z-50 mx-auto'/>

                <div className='border-[2px] inline-block absolute xl:left-[78px]
                sm:absolute sm:top-[-40px] sm:left-[27px] md:top-[-71px] md:left-[38px] lg:top-[-85px] lg:left-[30px] xl:top-[-111px] xl:left-[55px]
                2xl:top-[-111px] 2xl:left-[112px] sm:w-[210px] md:w-[240px] lg:w-[350px] xl:w-[440px] 2xl:w-[520px] z-10 px-2 pt-3
                sm:px-3 sm:py-0 lg:py-4 lg:px-6 xl:px-8 xl:pt-10 xl:pb-9 2xl:px-10
                repairBorder reviewIcon'>
                    {props.children}
                </div>

                <div className='reviewText'>
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
                {person ? <img src={person} alt="personImg" className='absolute z-50 mx-auto hidden sm:block
                sm:top-[-71px] sm:left-[-134px] md:top-[-106px] md:left-[-166px]
                lg:top-[-123px] lg:left-[-213px] xl:top-[-162px] xl:left-[-180px] 2xl:left-[-50px]'/>
                    :
                    null
                }
            </div>
        </div>
    );
};

export default ReviewOffer;