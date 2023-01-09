import React from 'react';
import MainOffer from '../../components/MainOffer/MainOffer';
import MainImg from '../../assets/images/mainPage-mainImg.png';
import RepairImg from "../../assets/icons/Repair";
import ServicesBlock from "../../components/ServicesBlock/ServicesBlock";
import Advantages from '../../components/Adventages/Adventages';

const Main = () => {
    const offerText = 'Lorem ipsum dolor sit amet consectetur. Tincidunt vitae vel ut mauris libero quis morbi. Ut habitasse nisi mollis sapien.'
    const services = ['washing machine repair', 'Dryer Repair', 'Refrigerator Repair', 'Range Repair', 'Wall Ovens Repair', 'Garbage Disposal Repair'];


    const advantagesData = [
        {
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Habitasse pellentesque in facilisis eget nulla cursus vel. ' +
                'Consequat nisl adipiscing ultrices interdum egestas erat semper.'
        },
        {
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Habitasse pellentesque in facilisis eget nulla cursus vel. ' +
                'Consequat nisl adipiscing ultrices interdum egestas erat semper.'
        },
        {
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Habitasse pellentesque in facilisis eget nulla cursus vel. ' +
                'Consequat nisl adipiscing ultrices interdum egestas erat semper.'
        },
        {
            title: 'Lorem ipsum dolor sit',
            description: 'Lorem ipsum dolor sit amet consectetur. Habitasse pellentesque in facilisis eget nulla cursus vel. ' +
                'Consequat nisl adipiscing ultrices interdum egestas erat semper.'
        },
    ]

    return (
        <main>
            <MainOffer
                mainImg={MainImg}
                offerText={offerText}
            >
                <RepairImg/>
            </MainOffer>

            <div className='my-[40px] lg:my-[80px] xl:mt-[120px] xl:mb-[130px]'>
                <ServicesBlock services={services}/>
            </div>

            <div className='mb-[40px] lg:pb-[80px] xl:pb-[120px]'>
                <Advantages advantagesData={advantagesData}/>
            </div>
        </main>
    );
};

export default Main;