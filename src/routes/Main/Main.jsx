import React from 'react';
import Offer from '../../components/Offer/Offer';
import MainImg from '../../assets/images/MainPage-mainImg.png';
import LeftSideImg from "../../assets/icons/Repair";

const Main = () => {
    const offerText = 'Lorem ipsum dolor sit amet consectetur. Tincidunt vitae vel ut mauris libero quis morbi. Ut habitasse nisi mollis sapien.'

    return (
        <main>

            <Offer
                mainImg={MainImg}
                offerText={offerText}
            >
                <LeftSideImg/>
            </Offer>


        </main>
    );
};

export default Main;