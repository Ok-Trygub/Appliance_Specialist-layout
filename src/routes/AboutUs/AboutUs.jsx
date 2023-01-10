import React from 'react';
import AboutOffer from '../../components/AboutOffer/AboutOffer';
import AboutIcon from "../../assets/icons/About";
import AboutMainImg from '../../assets/images/about_mainImg.png';
import './AboutUs.css';
import MasterImg from '../../assets/images/master.png';

const AboutUs = () => {
    const offerText = 'Lorem ipsum dolor sit amet consectetur. Tincidunt vitae vel ut mauris libero quis morbi. Ut habitasse nisi mollis sapien.'

    return (
        <main>
            <AboutOffer
                mainImg={AboutMainImg}
                offerText={offerText}
            >
                <AboutIcon/>
            </AboutOffer>

            <section className='containerStyle lg:px-30 xl:px-36 pb-9 sm:pb-11 lg:pb-20 xl:pb-[120px]'>
                <h2 className='mb-12'><span className='headerUnderline'>Our</span> way
                    <span className='text-mainRed'>.</span></h2>
                <div className='flex items-center'>
                    <h3 className='articleTitle text-mainRed pl-2'>Appliance repair company</h3>

                    <div className='flex justify-between text-xs sm:text-sm lg:text-base xl:text-xl text-white'>
                        <p className='pr-1.5 md:pr-3 lg:pr-5 xl:pr-7'>Lorem ipsum dolor sit amet consectetur. Tincidunt
                            vitae
                            vel ut mauris libero quis morbi. Ut
                            habitasse nisi mollis sapien. Vitae morbi faucibus cras nisi dolor erat turpis integer
                            lorem. Dui interdum aliquet nam augue ultrices fermentum. Eget curabitur ante amet in
                            sodales eu
                            massa et. Id pellentesque tincidunt ac eu nunc pellentesque nunc.</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Tincidunt vitae vel ut mauris libero quis morbi. Ut
                            habitasse nisi mollis sapien. Vitae morbi faucibus cras nisi dolor erat turpis integer
                            lorem. Dui interdum aliquet nam augue ultrices fermentum. Eget curabitur ante amet in
                            sodales eu
                            massa et. Id pellentesque tincidunt ac eu nunc pellentesque nunc.</p>
                    </div>
                </div>
            </section>

            <h1 className='containerStyle pb-4 xl:pb-7'>Lorem ipsum dolor sit amet consectetur
                <span className='text-mainRed'>.</span></h1>

            <img src={MasterImg} alt="master_img" className='pb-9 sm:pb-11 lg:pb-20 xl:pb-[120px]'/>
        </main>
    );
};

export default AboutUs;