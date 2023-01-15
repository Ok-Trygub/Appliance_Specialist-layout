import React from 'react';
import ReviewOffer from '../../components/ReviewOffer/ReviewOffer';
import ReviewsMainImg from "../../assets/images/reviews_mainImg.png";
import ReviewIcon from "../../assets/icons/ReviewIcon";
import Girl from '../../assets/images/girl_review.png';
import Carousel from '../../components/Carousel/Carousel';
import ReviewKitchen_1 from '../../assets/images/reviewKitchen.png';
import ReviewKitchen_2 from '../../assets/images/reviewKitchen_2.png';
import ReviewKitchen_3 from '../../assets/images/reviewKitchen_3.png';
import ReviewKitchen_4 from '../../assets/images/reviewKitchen_4.png';


const Reviews = () => {
    const offerText = 'Lorem ipsum dolor sit amet consectetur. Tincidunt vitae vel ut mauris libero quis morbi. Ut habitasse nisi mollis sapien.'

    return (
        <main>
            <ReviewOffer
                mainImg={ReviewsMainImg}
                offerText={offerText}
                person={Girl}
            >
                <ReviewIcon/>
            </ReviewOffer>

            <div className='containerStyle'>
                <h2 className='py-6 sm:pt-20 sm:pb-4 lg:pt-32 lg:pb-10'><span
                    className='headerUnderline'>Our clients l</span>ike us
                    <span className='text-mainRed'>.</span></h2>


                <div className='flex pb-12 lg:pb-20 xl:pb-[120px]'>
                    <div>
                        <img src={ReviewKitchen_1} alt="review_Kitchen" className='pr-2 xl:pr-4 2xl:pr-8
          sm:max-w-[200px] lg:max-w-[300px] 2xl:max-w-[400px]'/>
                    </div>

                    <div>
                        <div className='flex'>
                            <img src={ReviewKitchen_2} alt="review_Kitchen" className='pr-2 xl:pr-3 2xl:pr-8 w-[100px] sm:w-[130px] md:w-[100px]
            lg:w-[140px] xl:w-[190px] 2xl:w-[225px]'/>
                            <img src={ReviewKitchen_3} alt="review_Kitchen" className='pr-2 xl:pr-3 2xl:pr-8 w-[100px] sm:w-[130px] md:w-[100px]
            lg:w-[140px] xl:w-[190px] 2xl:w-[225px]'/>
                            <img src={ReviewKitchen_4} alt="review_Kitchen" className='hidden md:inline-block md:w-[100px]
            lg:w-[140px] xl:xl:w-[190px] 2xl:w-[225px]'/>
                        </div>
                        <Carousel/>
                    </div>
                </div>


            </div>

        </main>
    );
};

export default Reviews;