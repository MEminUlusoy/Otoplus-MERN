import React from 'react'
import { BsFuelPump } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { IoCarOutline } from "react-icons/io5";
import { PiCarProfile } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";

const CarDetails = ({car}) => {

    return (

        <div className='bg-[#FFFFFF] col-span-3 row-span-5 p-5'>
            <div className='h-full w-full '>
                <div className=' w-full h-[75%]'>

                    <div className='w-full h-[16.6666%] bk flex items-center border-b border-gray-300'>
                        <div className='h-full w-1/2  flex items-center justify-start'>
                            <FaCalendarAlt className='text-sm text-gray-700 font-semibold ml-2' />
                            <p className='text-sm text-gray-700 font-semibold ml-2'>Model Yılı</p>
                        </div>
                        <div className='h-full w-1/2  flex items-center justify-end'>
                            <p className='text-sm font-bold text-gray-700 mr-2'>{car.modelYear}</p>
                        </div>

                    </div>
                    <div className='w-full h-[16.6666%] bk flex items-center border-b border-gray-300'>
                        <div className='h-full w-1/2  flex items-center justify-start'>
                            <BsFuelPump className='text-sm text-gray-700 font-semibold ml-2' />
                            <p className='text-sm text-gray-700 font-semibold ml-2'>Yakıt</p>
                        </div>
                        <div className='h-full w-1/2  flex items-center justify-end'>
                            <p className='text-sm font-bold text-gray-700 mr-2'>{car.fuel}</p>
                        </div>

                    </div>
                    <div className='w-full h-[16.6666%]  flex items-center border-b border-gray-300'>
                        <div className='h-full w-1/2  flex items-center justify-start'>
                            <GiGearStickPattern className='text-sm text-gray-700 font-semibold ml-2' />
                            <p className='text-sm text-gray-700 font-semibold ml-2'>Vites</p>
                        </div>
                        <div className='h-full w-1/2  flex items-center justify-end'>
                            <p className='text-sm font-bold text-gray-700 mr-2'>{car.gear}</p>
                        </div>

                    </div>
                    <div className='w-full h-[16.6666%]  flex items-center border-b border-gray-300'>
                        <div className='h-full w-1/2  flex items-center justify-start'>
                            <FaCar className='text-sm text-gray-700 font-semibold ml-2' />
                            <p className='text-sm text-gray-700 font-semibold ml-2'>KM</p>
                        </div>
                        <div className='h-full w-1/2  flex items-center justify-end'>
                            <p className='text-sm font-bold text-gray-700 mr-2'>{car.km} KM</p>
                        </div>

                    </div>
                    <div className='w-full h-[16.6666%]  flex items-center border-b border-gray-300'>
                        <div className='h-full w-1/2  flex items-center justify-start'>
                            <IoCarOutline className='text-sm text-gray-700 font-semibold ml-2' />
                            <p className='text-sm text-gray-700 font-semibold ml-2'>Plaka</p>
                        </div>
                        <div className='h-full w-1/2  flex items-center justify-end'>
                            <p className='text-sm font-bold text-gray-700 mr-2'>35 HC 7034</p>
                        </div>

                    </div>
                    <div className='w-full h-[16.6666%]  flex items-center border-b border-gray-300'>
                        <div className='h-full w-1/2  flex items-center justify-start'>
                            <PiCarProfile className='text-sm text-gray-700 font-semibold ml-2' />
                            <p className='text-sm text-gray-700 font-semibold ml-2'>Renk</p>
                        </div>
                        <div className='h-full w-1/2  flex items-center justify-end'>
                            <p className='text-sm font-bold text-gray-700 mr-2'>Beyaz</p>
                        </div>

                    </div>
                </div>
                <div className='w-full h-[25%] flex justify-center items-center'>
                    <p className='text-sm text-gray-700 text-center'>
                        LETGO MOBİL İNTERNET SERVİSLERİ VE TİCARET <br /> ANONİM ŞİRKETİ <br />
                        Yetki No: 3402080
                    </p>
                </div>

            </div>
        </div>

    )
}

export default CarDetails