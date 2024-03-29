import React, { useState, useEffect } from 'react'
import { RiInstagramLine } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { LuWalletCards } from "react-icons/lu";

import axios from 'axios';
import Spinner from '../../components/Spinner';
import { useParams } from 'react-router-dom';
import CarDetails from './CarDetails';
import PriceCar from './PriceCar';



const ShowCar = () => {

    const [car, setCar] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)

        axios.get(`http://localhost:5555/cars/${id}`)
            .then((res) => {
                setCar(res.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })

    }, [])

    return (
        <div className='bg-[#EEEEEE] w-full h-[1300px] flex items-center justify-center'>
            {
                loading ? (<Spinner />
                ) : (
                    <div className='grid grid-cols-9 grid-rows-12 gap-4 py-5  h-full w-3/5'>
                        {/* Header */}
                        <div className='bg-[#FFFFFF] flex  col-span-9 row-span-1'>
                            {/* Left */}
                            <div className='h-full w-[60%]  flex items-center justify-around '>
                                <div className='cursor-pointer h-full w-[18%] flex items-center justify-center border-b-2  border-[#FF3F55] '>
                                    <p className=' text-black font-bold text-base tracking-tight'>Araç Hakkında</p>
                                </div>
                                <div className='group cursor-pointer h-full  w-[18%] flex items-center justify-center   hover:border-b-2  border-[#FF3F55]'>
                                    <p className='text-base tracking-tight group-hover:text-black group-hover:font-bold text-gray-500 font-normal hover:transition duration-150 ease-in'>Hasar Bilgisi</p>
                                </div>
                                <div className='group cursor-pointer h-full  w-[18%] flex items-center justify-center   hover:border-b-2 border-[#FF3F55] '>
                                    <p className='text-base tracking-tight group-hover:text-black group-hover:font-bold   text-gray-500 hover:transition duration-150 ease-in'>Araç Özellikleri</p>
                                </div>
                            </div>

                            {/* Right */}
                            <div className='h-full w-[40%] flex items-center justify-end '>

                                <div className='border-r border-gray-300 h-full w-[15%] flex items-center justify-center '>
                                    <div className=' text-gray-500  flex justify-center items-center'>
                                        <p className='text-sm'>Paylaş</p>
                                    </div>
                                </div>

                                <div className='border-r border-gray-300 h-full w-[15%] flex items-center justify-center  '>
                                    <div className=' h-[28px] w-[28px]  text-white rounded-full bg-[#D72542] flex justify-center items-center'>
                                        <RiInstagramLine className='text-sm cursor-pointer' />
                                    </div>
                                </div>

                                <div className='border-r border-gray-300 h-full w-[15%] flex items-center justify-center  '>
                                    <div className=' h-[28px] w-[28px]  text-white rounded-full bg-[#049DD9] flex justify-center items-center'>
                                        <AiOutlineTwitter className='text-sm cursor-pointer' />
                                    </div>
                                </div>

                                <div className='h-full w-[15%] flex items-center justify-center '>
                                    <div className='h-[28px] w-[28px] text-white rounded-full  bg-[#418EF2] flex justify-center items-center'>
                                        <FaFacebookF className='text-sm cursor-pointer' />
                                    </div>
                                </div>


                            </div>
                        </div>


                        {/* Image Container */}
                        <div className='bg-[#FFFFFF]  col-span-6 row-span-5 flex flex-col'>
                            <div className='w-full h-[80%] border border-red-500 '>
                                <img className='h-full w-full object-cover' src="https://dat-tr-prda-ops-vava.azureedge.net/cars/153918/resizedimages/82fe16dfc7824e91b9203f220075b8e3_vdp_mob.webp" alt="" />
                            </div>
                            <div className='w-full h-[20%] border border-green-500 '>

                            </div>
                        </div>

                        {/* Ara */}
                        <div className='bg-[#FFFFFF] col-span-3 row-span-2 flex flex-col'>
                            <div className='w-full h-[33.3333%]  flex border-b border-gray-300 p-5'>
                                <LuWalletCards className='' />
                                <p className='text-[14.5px] font-bold ml-1'>Hemen Ara</p>
                            </div>
                            <div className='w-full h-[66.6666%]  flex flex-col justify-center items-center'>
                                <div className='group h-[30%] w-[70%] hover:bg-green-700 hover:transition hover:duration-150 hover:ease-in border-4 rounded border-green-700 flex justify-center items-center py-6 cursor-pointer '>
                                    <BsFillTelephoneFill className=' text-[#008000] font-bold text-[22px] group-hover:text-white transition duration-150 ease-in' />
                                    <p className='ml-1 text-[#008000] font-semibold text-[22px] group-hover:text-white transition duration-150 ease-in'> 0 [850] 955 90 90</p>
                                </div>
                                <p className='text-[#008000] text-[11px] mt-3'>* Çağrı merkezimiz 09:00 - 22:00 arasında hizmet vermektedir.</p>
                            </div>
                        </div>

                        {/* Price Container */}
                        <PriceCar car={car} />




                        {/* Advert Container */}
                        <div className='bg-[#FFFFFF]  col-span-6 row-span-1 flex'>
                            <div className='h-full w-1/3 border-r border-gray-300 flex justify-start  items-center'>
                                <img className="h-full w-1/2 object-scale-down " src="https://www.otoplus.com/assets/img/badges/new/3-2.png" alt="" />
                                <p className='text-lg'>20 gün <br /> <span className='font-bold'>İade Hakkı</span></p>
                            </div>
                            <div className='h-full w-1/3 border-r border-gray-300 flex justify-start  items-center'>
                                <img className="h-full w-1/2 object-scale-down" src="https://www.otoplus.com/assets/img/badges/new/14.png" alt="" />
                                <p className='text-lg'><span className='font-bold'>Sürpriz</span> masraf <span className='font-bold'>yok</span></p>
                            </div>
                            <div className='h-full w-1/3  flex justify-start items-center'>
                                <img className="h-full w-1/2 object-scale-down" src="https://www.otoplus.com/assets/img/badges/new/13.png" alt="" />
                                <p className='text-lg'>otoplus <br /><span className='font-bold'>Garantisi</span></p>
                            </div>
                        </div>

                        {/* Ekspertiz  */}
                        <div className='border border-gray-500 col-span-6 row-span-5'></div>



                        {/* Car Details */}
                        <CarDetails car={car} />




                    </div>
                )
            }
        </div >
    )
}

export default ShowCar