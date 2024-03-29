import React from 'react'

const PriceCar = ({car}) => {
    return (
        <div className='bg-[#FFFFFF]  col-span-3 row-span-4'>
            <div className='w-full h-[20%] border-b border-gray-300 flex justify-start items-center'>
                <div className='h-full w-[30%] ml-5 flex justify-start items-center'>
                    <img className='h-full w-full object-scale-down' src="https://cdn.otoplus.com/assets-1702037463567/img/logo-home@2x.png" alt="" />
                </div>

            </div>
            <div className='w-full h-[80%] flex flex-col'>
                <div className='w-full h-[20%] flex justify-center items-center  '>
                    <h1 className='text-[#000000] font-f1 font-bold text-3xl mt-2'>{car.brand} <span className='ml-1 text-3xl'>{car.model}</span></h1>
                </div>
                <div className='w-full h-[12%]  flex justify-center items-center '>
                    <h1 className='font-bold font-f1 text-xl text-[#848584] '>1.6 CRDI</h1>
                </div>
                <div className='w-full h-[12%]  flex justify-center items-center '>
                    <h1 className='font-bold font-f1 text-xl text-[#848584] '>ELITE</h1>
                </div>
                <div className='w-full h-[21%]  flex justify-center items-center  '>
                    <h1 className='font-bold font-f1 text-4xl  text-[#000000] '>{car.price} TL</h1>
                </div>
                <div className='w-full h-[35%]  flex justify-center items-center border-t border-gray-300 '>
                    <button className='h-[50%] w-[80%] font-bold bg-[#4bce49] hover:bg-[#39bb37]  text-[#FFFFFF] rounded-full '>Hemen Al</button>
                </div>

            </div>
        </div>
    )
}

export default PriceCar