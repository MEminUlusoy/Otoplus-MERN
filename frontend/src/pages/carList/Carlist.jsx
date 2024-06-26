import React, { useState, useEffect } from 'react'
import { BsFuelPump } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import Spinner from '../../components/Spinner';
import axios from "axios"

const Carlist = () => {

  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    axios.get("http://localhost:5555/cars")
      .then((res) => {
        setCars(res.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      })

  }, [])


  return (
    <div className='flex flex-col '>
      {/* Search Area */}
      <div className='bg-white w-full h-[90px] flex justify-center items-center border-t '>

        {/* Inner Search Area */}
        <div className='h-full w-3/5 flex '>

          {/* Search Left */}
          <div className='flex justify-between items-center h-full w-[48%]'>
            <input className='border border-gray-300 rounded-md h-3/5 w-full  pl-3 pb-1  text-gray-500 focus:outline-none  placeholder:text-gray-500 placeholder:text-[15px] placeholder:font-normal placeholder:tracking-tight' type="text" placeholder='Araç marka veya model yazın...' />
          </div>
          {/* Search Right */}
          <div className='flex justify-end items-center h-full w-[52%] focus:shadow-none'>
            <h3 className='font-semibold text-[16px] mr-5 '>Sıralama</h3>
            <select className='border rounded-md h-[55%] w-[30%] pl-2 outline-none  focus:shadow-md focus:shadow-gray-500 transition ease-in duration-200' required name="ordertype" id="ordertype">
              <option value="defaultOrder">Yeniden Eskiye</option>
              <option value="ordertype1">Eskiden Yeniye</option>
              <option value="ordertype2">Ucuzdan Pahalıya</option>
            </select>
          </div>

        </div>
      </div>

      {/* Car Lıst Area */}
      <div className='bg-[#EEEEEE] w-full min-h-[1000px] flex justify-center items-center '>
        <div className='h-full w-3/5 flex py-10   '>
          <div className='bg-[#FFFFFF] h-[900px] w-[23%] border border-gray-200 flex flex-col'>


            <div className='w-full h-[34%] flex flex-col'>
              <div className='w-full h-[13%] flex items-end  pl-2 '>
                <h2 className='font-bold text-base'>Marka</h2>
              </div>
              <div className='w-full h-[87%] flex flex-col items-center justify-center py-4 '>
                <input className='text-xs bg-[#F2F3F2] w-[90%]  h-[15%] placeholder:text-black px-5 outline-none ' type="search" placeholder='Marka Adı' />
                <select className="w-[90%] h-[85%] bg-[#F9F9F9]  outline-none p-1 text-[16px] border border-gray-200 rounded cursor-pointer" name="brand" id="brand" multiple>
                  <option className='font-bold mt-2' value="markalar">Tüm markalar</option>
                  <option className='font-semibold mt-2' value="volvo">Volvo</option>
                  <option className='font-semibold mt-2' value="Tesla">Tesla</option>
                  <option className='font-semibold mt-2' value="Porshe">Porshe</option>
                  <option className='font-semibold mt-2' value="BMW">BMW</option>
                  <option className='font-semibold mt-2' value="Mercedes">Mercedes</option>
                  <option className='font-semibold mt-2' value="Audi">Audi</option>
                  <option className='font-semibold mt-2' value="Hyundai">Hyundai</option>
                  <option className='font-semibold mt-2' value="Toyota">Toyota</option>
                  <option className='font-semibold mt-2' value="Chery">Chery</option>
                  <option className='font-semibold mt-2' value="Citroen">Citroen</option>
                  <option className='font-semibold mt-2' value="Nissan">Nissan</option>
                  <option className='font-semibold mt-2' value="Suzuki">Suzuki</option>
                </select>
              </div>
            </div>

            <div className='w-full h-[11%] flex flex-col border-t '>
              <div className='w-full h-[30%] flex items-end pl-2  '>
                <h2 className='font-bold text-base'>Model</h2>
              </div>
              <div className='w-full h-[70%] flex items-center justify-start pl-2'>
                <select className='rounded-lg w-[95%] h-3/5 border border-gray-300  outline-none text-sm text-black font-medium placeholder:text-gray-400 pl-2 mb-3 cursor-pointer' defaultValue={"pick"} name="model" id="model" autoFocus>
                  <option hidden value="pick">Seçiniz</option>
                  <option className='cursor-pointer font-semibold mt-2' value="520">520</option>
                  <option className='cursor-pointer font-semibold mt-2' value="320">320</option>
                  <option className='cursor-pointer font-semibold mt-2' value="530">530</option>
                </select>
              </div>

            </div>

            <div className='w-full h-[11%] flex flex-col border-t '>
              <div className='w-full h-[30%] flex items-end pl-2  '>
                <h2 className='font-bold text-base'>Model Yılı</h2>
              </div>
              <div className='w-full h-[70%] flex items-center justify-start pl-2'>
                <select className='rounded-lg w-[95%] h-3/5 border border-gray-300  outline-none text-sm text-black font-medium placeholder:text-gray-400 pl-2 mb-3 cursor-pointer' defaultValue={"pick"} name="modelYear" id="modelYear" autoFocus>
                  <option hidden value="pick">Seçiniz</option>
                  <option className='cursor-pointer font-semibold mt-2' value="2012">2012</option>
                  <option className='cursor-pointer font-semibold mt-2' value="2014">2014</option>
                  <option className='cursor-pointer font-semibold mt-2' value="2020">2020</option>
                </select>
              </div>
            </div>

            <div className='w-full h-[11%] flex flex-col border-t '>
              <div className='w-full h-[30%] flex items-end pl-2  '>
                <h2 className='font-bold text-base'>Kilometre</h2>
              </div>
              <div className='w-full h-[70%] flex items-center justify-start pl-2'>
                <select className='rounded-lg w-[95%] h-3/5 border border-gray-300  outline-none text-sm text-black font-medium placeholder:text-gray-400 pl-2 mb-3 cursor-pointer' defaultValue={"pick"} name="km" id="km" autoFocus>
                  <option hidden value="pick">Seçiniz</option>
                  <option className='cursor-pointer font-semibold mt-2' value="50">0-50.000</option>
                  <option className='cursor-pointer font-semibold mt-2' value="100">50.000-100.000</option>
                  <option className='cursor-pointer font-semibold mt-2' value="300">100.000-300.000</option>
                </select>
              </div>
            </div>


            <div className='w-full h-[11%] flex flex-col border-t '>
              <div className='w-full h-[30%] flex items-end pl-2  '>
                <h2 className='font-bold text-base'>Vites Türü</h2>
              </div>
              <div className='w-full h-[70%] flex items-center justify-start pl-2'>
                <select className='rounded-lg w-[95%] h-3/5 border border-gray-300  outline-none text-sm text-black font-medium placeholder:text-gray-400 pl-2 mb-3 cursor-pointer' defaultValue={"pick"} name="gear" id="gear" autoFocus>
                  <option hidden value="pick">Seçiniz</option>
                  <option className='cursor-pointer font-semibold mt-2' value="Duz">Düz</option>
                  <option className='cursor-pointer font-semibold mt-2' value="Otomatik">Otomatik</option>
                </select>
              </div>
            </div>

            <div className='w-full h-[11%] flex flex-col border-t '>
              <div className='w-full h-[30%] flex items-end pl-2  '>
                <h2 className='font-bold text-base'>Yakıt Tipi</h2>
              </div>
              <div className='w-full h-[70%] flex items-center justify-start pl-2'>
                <select className='rounded-lg w-[95%] h-3/5 border border-gray-300  outline-none text-sm text-black font-medium placeholder:text-gray-400 pl-2 mb-3 cursor-pointer' defaultValue={"pick"} name="fuel" id="fuel" autoFocus>
                  <option hidden value="pick">Seçiniz</option>
                  <option className='cursor-pointer font-semibold mt-2' value="Dizel">Dizel</option>
                  <option className='cursor-pointer font-semibold mt-2' value="Benzin">Benzin</option>
                </select>
              </div>
            </div>

            <div className='w-full h-[11%] flex items-center justify-center border-t '>
              <button className='w-[90%] h-[50%] font-bold rounded-lg bg-[#FF3F55] text-[#FFFFFF] text-[14px]'>Filtrele</button>
            </div>


          </div>


          <div className='h-full w-[77%] flex flex-wrap justify-between content-start   pl-10 '>

            {
              loading ? (

                <Spinner />

              ) : (
                
                cars.map((car)=>(
                
                  <div key={car._id} className='w-[30%] h-[240px] border border-gray-200 mb-10 bg-[#FFFFFF] '>
                    <a href={`/cars/details/${car._id}`}>
                      <div className='group relative w-full h-3/5 cursor-pointer'>
                        <img className='object-cover h-full w-full absolute' src="https://i0.shbdn.com/photos/70/53/53/x5_1145705353e6i.jpg" alt="" />
                        <div className='group-hover:flex  hidden w-full h-full   absolute    justify-center items-center'>
                          <h1 className='group-hover:flex  hidden h-[45px] w-[120px]  justify-center items-center rounded-3xl bg-white text-red-500 font-semibold text-lg'>Satın Al</h1>
                        </div>
                      </div>
                    </a>
                    <div className='flex flex-col  w-full h-2/5'>

                      <div className='w-full h-[75%] '>
                        <div className='w-full h-1/3 flex items-center pl-2 '>
                          <h1 className='text-sm font-extrabold text-gray-900'>{car.brand}</h1>
                          <h1 className='text-sm font-extrabold  text-gray-900 ml-2'>{car.model}</h1>
                        </div>
                        <div className='w-full h-1/3 flex items-start justify-end  pr-1'>
                          <h1 className='text-sm text-red-500 font-bold '>{car.price.toLocaleString()}<span className='font-semibold'>TL</span></h1>
                        </div>
                        <div className='w-full h-1/3 flex items-end pl-2 '>
                          <p className='text-xs font-semibold text-gray-800'><span className='font-bold'>{car.modelYear}</span> {car.model} Sedan 2.0</p>
                        </div>
                      </div>
                      <div className='w-full h-[25%] flex border-t border-gray-300'>
                        <div className='h-full w-1/3 flex justify-start items-center' >
                          <BsFuelPump className='ml-1 text-[10px] font-bold text-gray-500' />
                          <p className='text-[10px] text-black font-semibold ml-1'>{car.fuel}</p>
                        </div>
                        <div className='h-full w-1/3 flex justify-start items-center'>
                          <GiGearStickPattern className='text-[10px] font-bold text-gray-500' />
                          <p className='text-[10px] text-black font-semibold ml-1'>{car.gear}</p>
                        </div>
                        <div className='h-full w-1/3 flex justify-start items-center'>
                          <FaCar className='text-[10px] font-bold text-gray-500' />
                          <p className='text-[10px] text-black font-semibold ml-1'>{car.km.toLocaleString()} KM</p>
                        </div>



                      </div>



                    </div>
                  </div>
                ))  

              )

            }



            


          </div>


        </div>
      </div>
    </div>
  )
}

export default Carlist