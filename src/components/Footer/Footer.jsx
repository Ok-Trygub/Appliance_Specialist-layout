import React from 'react';
import './Footer.css';
import FooterLogo from '../../assets/icons/FooterLogo';
import Instagram from "../../assets/icons/Instagram";
import Facebook from "../../assets/icons/Facebook";
import Youtube from "../../assets/icons/Youtube";
import {useNavigate} from "react-router-dom";


const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer className='containerStyle'>
            <nav className='lg:flex lg:justify-between pb-[60px]'>
                <div className='hidden lg:flex lg:flex-col lg:justify-center pr-5'>
                    <span className='lg:w-[142px] xl:w-[182px]'>
                            <FooterLogo/>
                    </span>
                    <p className='text-[11px] leading-[14px] pt-2'>© 2022 All rights reserved</p>
                </div>

                <div className='flex justify-between pb-9 lg:pb-0'>
                    <div className='pr-4 lg:pr-0 2xl:pr-11'>
                        <ul>
                            <li className='footerNavHeader'>Map site</li>
                            <li className='footerNavItem' onClick={() => navigate('/')}>Main</li>
                            <li className='footerNavItem' onClick={() => navigate('/about_us')}>About us</li>
                            <li className='footerNavItem' onClick={() => navigate('/services')}>Services</li>
                            <li className='footerNavItem' onClick={() => navigate('/reviews')}>Miami appliance repair
                            </li>
                            <li className='footerNavItem' onClick={() => navigate('/reviews')}>Reviews</li>
                            <li className='footerNavItem' onClick={() => navigate('/repair_tips')}>Repair tips</li>
                            <li className='footerNavItem' onClick={() => navigate('/contacts')}>Contacts</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li className='footerNavHeader'>Services</li>
                            <li className='footerNavItem'>Washing Machine Repair</li>
                            <li className='footerNavItem'>Dryer Repair</li>
                            <li className='footerNavItem'>Refrigerator Repair</li>
                            <li className='footerNavItem'>Range Repair</li>
                            <li className='footerNavItem'>Wall Ovens Repair</li>
                            <li className='footerNavItem'>Garbage Disposal Repair</li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='pr-4 lg:pr-0 2xl:pr-11'>
                        <ul>
                            <li className='footerNavHeader'>Contacts</li>
                            <li className='footerNavItem'>+ 1 (23) 456 - 78 - 90</li>
                            <li className='footerNavItem'>Adress, lorem ipsum dolor sit amet <br/> consectetur</li>
                            <li className='footerNavItem'>mail@mail.com</li>
                        </ul>
                    </div>

                    <div className='flex flex-col justify-center'>
                        <div className='flex items-center'>
                        <span className='pr-3 xl:pr-5 text-white hover:text-mainRed active:text-white'
                              onClick={() => window.open('https://www.instagram.com/', '_blank')}>
                            <Instagram/>
                        </span>
                            <span className='pr-3 xl:pr-5 text-white hover:text-mainRed active:text-white'
                                  onClick={() => window.open('https://www.facebook.com/', '_blank')}>
                            <Facebook/>
                        </span>
                            <span className='text-white hover:text-mainRed active:text-white'
                                  onClick={() => window.open('https://youtube.com/', '_blank')}
                            >
                        <Youtube/>
                        </span>
                        </div>
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;