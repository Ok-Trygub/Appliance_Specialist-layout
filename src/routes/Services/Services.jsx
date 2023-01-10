import React from 'react';
import ServicesMainImg from "../../assets/images/services_mainImg.png";
import ServicesIcon from "../../assets/icons/ServicesIcon";
import ServicesOffer from "../../components/ServicesOffer/ServicesOffer";
import ServicesBlock from "../../components/ServicesBlock/ServicesBlock";


const Services = () => {
    const offerText = 'Lorem ipsum dolor sit amet consectetur. Tincidunt vitae vel ut mauris libero quis morbi. Ut habitasse nisi mollis sapien.'
    const services = ['washing machine repair', 'Dryer Repair', 'Refrigerator Repair', 'Range Repair', 'Wall Ovens Repair', 'Garbage Disposal Repair'];

    return (
        <main className=''>
            <ServicesOffer
                mainImg={ServicesMainImg}
                offerText={offerText}
            >
                <ServicesIcon/>
            </ServicesOffer>

            <div className='py-9 sm:py-12 md:py-20 lg:py-24 xl:py-[120px]'>
                <ServicesBlock services={services}/>
            </div>
        </main>
    );
};

export default Services;