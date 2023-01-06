import React from 'react';
import './Header.css';
import Logo from '../../assets/icons/HeaderLogo';

const Header = () => {
    return (
        <header className='w-full h-24'>

            <div className='border-b-[1px] borderStyle'>

                <div className='containerStyle h-12 flex items-center justify-between'>

                    <div className='w-16 pr-1 sm:w-28 lg:w-[228px]'>
                <Logo/>
                    </div>


            <nav>
                <ul className='flex text-white text-[9px] sm:text-xs lg:text-lg'>
                    <li className='pr-1 sm:pr-3 lg:pr-10'>Main</li>
                    <li className='pr-1 sm:pr-3 lg:pr-10'>About us</li>
                    <li className='pr-1 sm:pr-3 lg:pr-10'>Services</li>
                    <li className='pr-1 sm:pr-3 lg:pr-10'>Reviews</li>
                    <li className='pr-1 sm:pr-3 lg:pr-10'>Repair tips</li>
                    <li>Contacts</li>
                </ul>
            </nav>

                </div>
            </div>

            <div className='flex containerStyle'>
                <address>
                    Adress, lorem ipsum dolor sit amet consectetur
                </address>
                <span>+ 1 (23) 456 - 78 - 90</span>
            </div>

        </header>
    );
};

export default Header;