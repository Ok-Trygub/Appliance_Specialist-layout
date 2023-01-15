import React from 'react';
import './Carousel.css';
import StarItem from "../../assets/images/starRatingItem.png";


const Carousel = () => {
    return (
        <div
            id="carouselExampleCrossfade"
            className="carousel slide relative pt-3 xl:pt-5 2xl:pt-11"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active float-left md:w-[300px] lg:w-[400px] 2xl:w-[635px]">
                    <p className='text-sm lg:text-md 2xl:text-2xl text-white uppercase'>Name 1</p>
                    <p className='text-xs lg:text-base'>17.10.2022</p>
                    <div className='flex py-1 2xl:py-3'>
                        <img src={StarItem} alt="starItem"/>
                        <img src={StarItem} alt="starItem"/>
                        <img src={StarItem} alt="starItem"/>
                    </div>

                    <p className='text-xs lg:text-sm 2xl:text-xl text-white'>Vitae morbi cras nisi dolor erat turpis.
                        Lorem ipsum dolor sit amet consectetur.
                        Tincidunt vitae vel ut mauris libero quis morbi.
                        Ut habitasse nisi mollis sapien. </p>
                </div>

                <div className="carousel-item float-left md:w-[350px] lg:w-[400px] 2xl:w-[635px]">
                    <p className='text-sm lg:text-md 2xl:text-2xl text-white uppercase'>Name 2</p>
                    <p className='text-xs lg:text-base'>05.03.2021</p>
                    <div className='flex py-1 2xl:py-3'>
                        <img src={StarItem} alt="starItem"/>
                        <img src={StarItem} alt="starItem"/>
                        <img src={StarItem} alt="starItem"/>
                        <img src={StarItem} alt="starItem"/>
                        <img src={StarItem} alt="starItem"/>
                    </div>

                    <p className='text-xs lg:text-sm 2xl:text-xl text-white'>Tincidunt vitae vel ut mauris. Lorem ipsum
                        dolor sit amet consectetur. Tincidunt vitae vel ut
                        mauris libero quis morbi.
                        Ut habitasse nisi mollis sapien. Vitae dolor erat turpis</p>
                </div>

                <div className="carousel-item float-left md:w-[300px] lg:w-[400px] 2xl:w-[635px]]">
                    <p className='text-sm lg:text-md 2xl:text-2xl text-white uppercase'>Name 3</p>
                    <p className='text-xs lg:text-base'>23.11.2019</p>
                    <div className='flex py-1 2xl:py-3'>
                        <img src={StarItem} alt="starItem"/>
                        <img src={StarItem} alt="starItem"/>
                        <img src={StarItem} alt="starItem"/>
                        <img src={StarItem} alt="starItem"/>
                    </div>

                    <p className='text-xs lg:text-sm 2xl:text-xl text-white'>Lorem ipsum consectetur. Tincidunt vitae
                        vel ut mauris libero quis morbi.
                        Ut habitasse nisi mollis sapien. Vitae morbi faucibus cras nisi dolor erat turpis</p>
                </div>
            </div>

            <button
                className="carousel-control-prev absolute top-0 bottom-[-165px] sm:bottom-[-140px] md:bottom-[-155px] lg:bottom-[-174px]
                xl:bottom-[-150px] 2xl:bottom-[-243px] right-[35px] sm:right-[35px] md:right-[70px] lg:right-[70px] xl:right-[80px] 2xl:right-[40px]
                flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none
                focus:no-underline"
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide="prev"
            >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat"
                              aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button
                className="carousel-control-next absolute top-0 bottom-[-165px] sm:bottom-[-140px] md:bottom-[-155px] lg:bottom-[-174px] xl:bottom-[-150px] 2xl:bottom-[-243px]
                flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none
                focus:no-underline right-0 sm:right-0 md:right-[30px] lg:right-[30px] xl:right-[40px] 2xl:right-0"
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide="next"
            >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat"
                              aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;