import React from 'react';
import './Adventages.css';
import Kitchen from '../../assets/images/kitchenOven.png';
import {Disclosure} from '@headlessui/react';
import {MinusIcon, PlusIcon} from '@heroicons/react/20/solid';


const Advantages = (props) => {
    const {advantagesData} = props;


    return (
        <div className='containerStyle'>
            <h2><span className='headerUnderline'>Advanta</span>ges
                <span className='text-mainRed'>.</span></h2>

            <div className='flex pt-5 md:pt-12'>
                <div
                    className="w-full sm:w-[200px] md:w-[200px] lg:w-[280px] xl:w-[400px] 2xl:w-[475px] mr-3 md:mr-4 lg:mr-7">

                    {advantagesData.map((section, index) => (
                        <Disclosure as="div" key={index} className="py-2 sm:py-1 lg:py-2.5 advItem">
                            {({open}) => (
                                <>
                                    <h3 className="flow-root">
                                        <p className='text-[10px] lg:text-md xl:text-xl leading-6'>/0{index + 1}</p>

                                        <Disclosure.Button
                                            className="flex w-full items-center justify-between w-full sm:w-[200px] md:w-[200px] lg:w-[280px]
                                            xl:w-[400px] 2xl:w-[475px] pt-1 xl:pt-2.5 text-sm">
                                            <span
                                                className="font-medium text-[18px] sm:text-[12px] lg:text-[18px] xl:text-[25px] uppercase leading-[32px] hover:text-white">
                                                {section.title}<span className='text-mainRed'>.</span>
                                            </span>
                                            <span className="flex items-center">
                              {open ? (
                                  <MinusIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                              ) : (
                                  <PlusIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                              )}
                            </span>
                                        </Disclosure.Button>
                                    </h3>

                                    <Disclosure.Panel>
                                        <div>
                                            <p className='text-white max-w-[500px] pt-3.5 sm:max-w-[400px] text-lg sm:text-sm
                                            lg:text-lg xl:text-xl'>{section.description}</p>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </div>

                <div className='hidden sm:block'>
                    <img src={Kitchen} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Advantages;