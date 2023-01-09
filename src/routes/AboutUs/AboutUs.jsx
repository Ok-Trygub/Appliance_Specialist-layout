import React from 'react';
import AboutOffer from '../../components/AboutOffer/AboutOffer';
import AboutIcon from "../../assets/icons/About";
import AboutMainImg from '../../assets/images/about_mainImg.png';
import './AboutUs.css';

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

            <section>
                <h2 className='mb-12 containerStyle'><span className='headerUnderline'>Our</span> way
                    <span className='text-mainRed'>.</span></h2>


                <div className='flex'>
                    <h3 className='articleTitle'>Appliance repair company</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Tincidunt vitae vel ut mauris libero quis morbi. Ut
                        habitasse nisi mollis sapien. Vitae morbi faucibus cras nisi dolor erat turpis integer lorem.
                        Dui interdum aliquet nam augue ultrices fermentum. Eget curabitur ante amet in sodales eu massa
                        et. Id pellentesque tincidunt ac eu nunc pellentesque nunc.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Tincidunt vitae vel ut mauris libero quis morbi. Ut
                        habitasse nisi mollis sapien. Vitae morbi faucibus cras nisi dolor erat turpis integer lorem.
                        Dui interdum aliquet nam augue ultrices fermentum. Eget curabitur ante amet in sodales eu massa
                        et. Id pellentesque tincidunt ac eu nunc pellentesque nunc.</p>
                </div>

            </section>

        </main>
    );
};

export default AboutUs;