import React from 'react';
import Instagram from "../../assets/icons/Instagram";
import Facebook from "../../assets/icons/Facebook";
import Youtube from "../../assets/icons/Youtube";


const Contacts = () => {
    return (
        <main>
            <div className='containerStyle pt-3 md:pt-6 lg:pt-10'>

                <h2 className='mb-6 md:mb-12'><span className='headerUnderline'>Do you have any que</span>stion
                    <span className='text-mainRed'>?</span></h2>

                <div className='text-white'>
                    <p className='xl:text-2xl uppercase font-medium'>Contacts
                        <span className='xl:text-2xl text-mainRed uppercase font-medium'>.</span></p>
                    <p className='text-sm pt-4 pb-2.5'>+ 1 (23) 456 - 78 - 90</p>
                    <p className='text-sm py-2.5'>Adress, lorem ipsum dolor sit amet consectetur</p>
                    <p className='text-sm pb-4'>mail@mail.com</p>


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
                <h2 className='mt-10 md:mt-16 mb-6 md:mb-10'><span className='headerUnderline'>How to</span> find us
                    <span className='text-mainRed'>.</span></h2>
            </div>

            <div className='pb-8 md:pb-20 xl:pb-[120px]'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22849.324098004356!2d28.6097408!3d44.285984899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40bae5b3f3598f03%3A0x649d1879103fa598!2sUzina%20De%20Pizza!5e0!3m2!1sru!2sro!4v1673814850903!5m2!1sru!2sro"
                    loading="lazy" className='w-full h-[230px] md:h-[350px] lg:h-[500px] xl:h-[717px]'
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
    );
};

export default Contacts;