import React from 'react';
import './ServicesBlock.css';

const ServicesBlock = (props) => {
    const {services} = props;


    return (
        <>
            <h2 className='mb-12 containerStyle'><span className='headerUnderline'>what we can do</span> for you
                <span className='text-mainRed'>.</span></h2>

            <div className='border-t-[1px] border-t-[#f242422b]'>
                {services.map((item, index) => (

                    <div key={index} className='serviceItem'>

                        {index === services.length - 2 ?
                            <p className='containerStyle text-white text-center font-medium'>
                                <span className='text-xl text-mainRed pr-3.5'>/0{index + 1}</span>{item}
                                <span className='text-mainRed'>.</span></p>
                            :
                            <p className='containerStyle'>
                                <span className='text-xl text-mainRed pr-3.5'>/0{index + 1}</span>
                                {item}</p>}
                    </div>
                ))}
            </div>
        </>
    );
};

export default ServicesBlock;