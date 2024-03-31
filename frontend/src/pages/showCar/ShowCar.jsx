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

    
    const [value, setValue] = useState(0);

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
                                    <a href='#eksp' className='text-base tracking-tight group-hover:text-black group-hover:font-bold text-gray-500 font-normal hover:transition duration-150 ease-in'>Hasar Bilgisi</a>
                                </div>
                                <div className='group cursor-pointer h-full  w-[18%] flex items-center justify-center   hover:border-b-2 border-[#FF3F55] '>
                                    <a href='#eksp' className='text-base tracking-tight group-hover:text-black group-hover:font-bold   text-gray-500 hover:transition duration-150 ease-in'>Araç Özellikleri</a>
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
                            <div className='w-full h-[80%]  '>
                                <img className='h-full w-full object-cover' src="https://dat-tr-prda-ops-vava.azureedge.net/cars/153918/resizedimages/82fe16dfc7824e91b9203f220075b8e3_vdp_mob.webp" alt="" />
                            </div>
                            <div className='w-full h-[20%] '>

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
                        <div id="eksp" className='bg-[#FFFFFF]  col-span-6 row-span-1 flex'>
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
                        <div  className=' col-span-6 row-span-5 flex flex-col'>
                            <div className='bg-[#FFFFFF]   w-full h-[12%] border-b border-gray-300 pl-5 pt-3'>
                                <h1 className='font-semibold text-2xl'>Ekspertiz</h1>
                            </div>
                            <div className='  w-full h-[88%]  flex'>
                                <div className=' bg-[#FFFFFF] h-full w-[40%]  flex flex-col py-5'>
                                    <img className='h-[85%] w-full object-scale-down ' src="https://cdn.otoplus.com/assets-1711703948901/img/expertise-v3@2x.png" alt="" />
                                    <div className=' w-full h-[15%]  flex justify-center items-center'>
                                        <div className='rounded-full h-[35px] w-[35px] bg-[#2681E8] flex items-center justify-center  text-[#FFFFFF] ml-5 font-bold'>B</div>
                                        <p className='text-sm ml-2 text-gray-400 font-thin'>Boyalı</p>
                                        <div className='rounded-full h-[35px] w-[35px] bg-[#FF5914] flex items-center justify-center text-[#FFFFFF] ml-5 font-bold'>D</div>
                                        <p className='text-sm ml-2 text-gray-400 font-thin'>Değişen</p>
                                    </div>
                                </div>
                                <div className='h-full w-[60%] p-5'>
                                    <div className='w-full h-[20%]  border-b border-gray-300 flex'>
                                        <div onClick={()=>setValue(0)} className={`group w-1/3 h-full  flex items-center justify-center ${value === 0 && `border-b-2  border-[#FF3F55]`} hover:border-b-2  border-[#FF3F55] cursor-pointer `}>
                                            <p className={` group-hover:text-black ${value === 0 ? `font-bold text-black` : `text-gray-500 font-normal `}  text-base tracking-tight group-hover:font-bold  hover:transition duration-150 ease-in`}>Araç Dışı</p>
                                        </div>
                                        <div  onClick={()=>setValue(1)} className={`group w-1/3 h-full flex items-center justify-center ${value === 1 && `border-b-2  border-[#FF3F55]`}  hover:border-b-2  border-[#FF3F55] cursor-pointer`}>
                                            <p className={` group-hover:text-black ${value === 1 ? `font-bold text-black` : `text-gray-500 font-normal `}  text-base tracking-tight group-hover:font-bold  hover:transition duration-150 ease-in`}>Araç İçi</p>
                                        </div>
                                        <div onClick={()=>setValue(2)} className={`group w-1/3 h-full flex items-center justify-center  ${value === 2 && `border-b-2  border-[#FF3F55]`}  hover:border-b-2  border-[#FF3F55] cursor-pointer`}> 
                                            <p className={` group-hover:text-black ${value === 2 ? `font-bold text-black` : `text-gray-500 font-normal `}  text-base tracking-tight group-hover:font-bold  hover:transition duration-150 ease-in`}>Motor & Mekanik </p>
                                        </div>
                                    </div>
                                    <div  className='w-full h-[80%] '>
                                        <div className='bg-[#FFFFFF] w-full h-[15%] flex items-center justify-center mt-5 border border-gray-300'>
                                            
                                            {  value === 0 && <p className='font-semibold text-base'>Araç dışında herhangi bir hasar bulunmamaktadır.</p>     }
                                            {  value === 1 && <p className='font-semibold text-base'>Araç içinde herhangi bir hasar bulunmamaktadır.</p>      } 
                                            {  value === 2 && <p className='font-semibold text-base'>Araç mekaniğinde herhangi bir hasar yoktur.</p> } 
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Car Details */}
                        <CarDetails car={car} />




                    </div>
                )
            }
        </div >
    )
}

export default ShowCar