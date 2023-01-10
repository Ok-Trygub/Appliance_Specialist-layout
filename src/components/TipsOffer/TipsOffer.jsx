import React from 'react';
import './TipsOffer.css';
import DirectionOffer from "../../assets/icons/DirectionOffer";

const TipsOffer = (props) => {
    const {mainImg, offerText} = props;

    return (
        <div className='offerContainerStyle'>

            <div className='relative'>
                <img src={mainImg} alt="mainImg" className='relative z-50 mx-auto'/>

                <div className='border-[2px] inline-block absolute xl:left-[78px]
                sm:absolute sm:top-[76px] sm:left-[-6px] md:top-[89px] md:left-[-14px] lg:top-[86px] lg:left-[9px] xl:top-[90px] xl:left-[150px]
                2xl:top-[48px] 2xl:left-[197px] sm:w-[180px] md:w-[220px] lg:w-[300px] 2xl:w-[380px] z-10 px-2 pt-3
                sm:px-3 sm:pb-3 sm:pt-3 lg:px-6 lg:pt-5 lg:pb-5 xl:px-7 xl:pt-5 xl:pb-5
                repairBorder tipsIcon'>
                    {props.children}
                </div>

                <div className='tipsText'>
                    <div className='sm:w-[200px] md:w-[220px] lg:w-[300px] 2xl:w-[364px] text-white sm:absolute
                    sm:top-0 sm:right-[-78px] md:top-[17px] md:right-[-60px] lg:right-[-50px] xl:right-[90px]
                    2xl:right-[135px] leading-[8px] sm:leading-[12px] md:leading-[16px] lg:leading-[18px] xl:leading-[24px]
                    text-[6px] sm:text-[10px] md:text-[11px] lg:text-[15px] 2xl:text-[18px]'>
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

export default TipsOffer;