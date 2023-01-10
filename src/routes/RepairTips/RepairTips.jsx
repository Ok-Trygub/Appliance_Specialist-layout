import React from 'react';
import TipsOffer from "../../components/TipsOffer/TipsOffer";
import TipsMainImg from '../../assets/images/tips_mainImg.png';
import TipsIcon from "../../assets/icons/TipsIcon";
import Advantages from "../../components/Adventages/Adventages";
import AdvantagesImg from "../../assets/images/tips_advImg.png";

const RepairTips = () => {
    const offerText = 'Lorem ipsum dolor sit amet consectetur. Tincidunt vitae vel ut mauris libero quis morbi. Ut habitasse nisi mollis sapien.'

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
        <main className='pb-9 md:pb-10 lg:pb-20 xl:pb-[120px]'>
            <TipsOffer
                mainImg={TipsMainImg}
                offerText={offerText}
            >
                <TipsIcon/>
            </TipsOffer>

            <div className='containerStyle flex justify-between items-center py-5 md:py-6 xl:pt-[120px] xl:pb-10'>
                <p className='articleTitle text-mainRed pl-1 sm:pl-3 xl:pl-5'>Lorem ipsum dolor</p>
                <p className='text-white text-xs sm:text-sm lg:text-base xl:text-xl'>
                    Lorem ipsum dolor sit amet consectetur. Tincidunt vitae vel ut mauris libero quis morbi. Ut
                    habitasse nisi mollis sapien. Vitae morbi faucibus cras nisi dolor erat turpis integer lorem. Dui
                    interdum aliquet nam augue ultrices fermentum. Eget curabitur ante amet in sodales eu massa et. Id
                    pellentesque tincidunt ac eu nunc pellentesque nunc. Lorem ipsum dolor sit amet consectetur.
                    Tincidunt vitae vel ut mauris libero quis morbi. Ut habitasse nisi mollis sapien. Vitae morbi
                    faucibus cras nisi dolor erat turpis integer lorem. Dui interdum aliquet nam augue ultrices
                    fermentum. Eget curabitur ante amet in sodales eu massa et.
                </p>
            </div>

            <Advantages
                advantagesData={advantagesData}
                advantagesImg={AdvantagesImg}
            />

        </main>
    );
};

export default RepairTips;