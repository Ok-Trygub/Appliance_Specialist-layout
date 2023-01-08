import React, {useState} from 'react';
import './Header.css';
import Logo from '../../assets/icons/HeaderLogo';
import AddressIcon from '../../assets/images/addressIcon.svg';
import PhoneIcon from '../../assets/images/phoneIcon.svg';
import {useNavigate} from 'react-router-dom';


const currentPageStyle = {
    color: '#F24242',
    borderBottom: '1px solid #F24242'
}


const Header = () => {

    const navItems = ['Main', 'About us', 'Services', 'Reviews', 'Repair tips', 'Contacts'];

    const [currentPage, setCurrentPage] = useState('Main');
    const navigate = useNavigate();


    const switchPage = (e) => {
        if (e.target.innerText === currentPage) return;
        setCurrentPage(e.target.innerText);

        if (e.target.innerText === 'Main') navigate('/')
        else navigate(e.target.innerText.replaceAll(" ", "_").toLowerCase());
    }


    return (
        <header className='w-full'>

            <div className='border-b-[1px] borderStyle'>
                <div className='containerStyle h-12 flex items-center justify-center sm:justify-between'>
                    <div className='hidden sm:block pr-2 sm:w-32 md:w-36 lg:w-48 xl:w-[228px]'>
                        <Logo/>
                    </div>

                    <nav>
                        <ul className='flex text-white text-[11px] sm:text-xs md:text-sm lg:text-[17px]'>
                            {navItems.map((item, index) => (
                                <li className='navItem' onClick={switchPage} key={index}
                                    style={item === currentPage ? currentPageStyle : null}
                                >{item}</li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className='flex justify-end items-center containerStyle pt-2 pb-3 md:pt-5 lg:pb-11'>
                <address className='text-[8px] md:text-[13px] leading-4 flex items-center pr-2 md:pr-5'>
                    <img src={AddressIcon} alt="address_icon"
                         className='pr-1 md:pr-2.5 w-3 h-3 md:w-5 md:h-6 lg:w-6 lg:h-7'/>
                    Adress, lorem ipsum dolor sit amet consectetur
                </address>

                <span className='text-[8px] text-white leading-6 md:text-[13px] lg:text-lg
                flex items-center'>
                    <img src={PhoneIcon} alt="phone_icon"
                         className='pr-1 md:pr-2.5 w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7'/>
                      + 1 (23) 456 - 78 - 90
                </span>
            </div>
        </header>
    );
};

export default Header;