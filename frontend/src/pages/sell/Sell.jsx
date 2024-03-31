import "./sell.css"
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Spinner from "../../components/Spinner"
import axios from "axios"



const Sell = () => {

    //*Anasayfadan gelen veriyi almak için location import edip kullandık
    let location = useLocation()

    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [modelYear, setModelYear] = useState("")
    const [fuel, setFuel] = useState("")
    const [gear, setGear] = useState("")
    const [plate, setPlate] = useState("")
    const [color, setColor] = useState("")
    let [km, setKm] = useState("")
    let [price, setPrice] = useState("")

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    



    //*Anasayfadaki inputları doldurunca oradaki submit butonuna basınca buraya gelecek verileri böyle aldık.
    useEffect(()=>{
        
        setBrand(location.state ? location.state.brand : "")
        setModel(location.state ? location.state.model : "")
        setModelYear(location.state ? location.state.modelYear : undefined)

    },[])

    
    //* Araç oluşturmaya yarıyor backendi kullanarak
    const handleCreateCar = () => {

        // Veritabanına göndermeden önce string olan number'ı sayısal bir tipe dönüştür
        km = parseInt(km.replace(/\./g, ''), 10); // Noktaları kaldırarak dönüştür
        // Burada numberAsNumber'ı veritabanına gönder

        // Veritabanına göndermeden önce string olan number'ı sayısal bir tipe dönüştür
        price = parseInt(price.replace(/\./g, ''), 10); // Noktaları kaldırarak dönüştür
        // Burada numberAsNumber'ı veritabanına gönder

        const data = {
            brand, 
            model,
            modelYear,
            fuel,
            gear,
            plate,
            color,
            km,
            price
           
            
        }

        setLoading(true)

        axios.post("http://localhost:5555/cars", data)
            .then(()=>{
                setLoading(false)
                navigate("/cars/carlist")
            })
            .catch((error)=>{
                setLoading(false)
                alert("An Error Happened. Check the Console")
                console.log(error);
            })


        

    }

    const handleChangeKm = (event) => {
        const value = event.target.value.replace(/[^0-9]/g, ''); // Sadece rakamları kabul et
        const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Nokta ile gruplara ayır
        setKm(formattedValue);
    };

    const handleChangePrice = (event) => {
        const value = event.target.value.replace(/[^0-9]/g, ''); // Sadece rakamları kabul et
        const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Nokta ile gruplara ayır
        setPrice(formattedValue);
    };

    return (
        <div>
            {loading ? <Spinner/> : " " }    
            <div className="sell-container">
                <div className="sell-inner-container">

                    <div className="sell-inner-left">

                        <div className="inputs-title">
                            <h1>Araç Marka - Model Seçiniz</h1>
                        </div>
                        <div className="left-inputs">
                            <div className="left-inner-inputs">

                                <div className="select-inner">
                                    <p>Marka</p>
                                    <select 
                                        required 
                                        className="brand" 
                                        name="brand" 
                                        id="brand"
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                        autoComplete="off"
                                    >
                                        <option value="defaultBrand" hidden ></option>
                                        <option value="Volvo">Volvo</option>
                                        <option value="BMW">BMW</option>
                                        <option value="Opel">Opel</option>
                                        <option value="Audi">Audi</option>
                                    </select>
                                </div>

                                <div className="select-inner">
                                    <p>Model</p>
                                    <select 
                                        required         
                                        className="model" 
                                        name="model" 
                                        id="model"
                                        value={model}
                                        onChange={(e) => setModel(e.target.value) }
                                    >
                                        <option value="defaultModel"  hidden></option>
                                        <option value="XC90">XC90</option>
                                        <option value="5.20">5.20</option>
                                        <option value="Meriva">Meriva</option>
                                        <option value="A6">A6</option>
                                    </select>
                                </div>

                                <div className="select-inner">
                                    <p>Model Yılı</p>
                                    <select 
                                        required 
                                        className="year" 
                                        name="modelYear" 
                                        id="modelYear"
                                        value={modelYear}
                                        onChange={(e) => setModelYear(e.target.value) }
                                    >
                                        <option value="defaultYear"  hidden></option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                    </select>
                                </div>

                                <div className="select-inner">
                                    <p>Yakıt Tipi</p>
                                    <select 
                                        required 
                                        className="fuel"
                                        name="fuel" 
                                        id="fuel"
                                        value={fuel}
                                        onChange={(e) => setFuel(e.target.value) }
                                    >
                                        <option value="defaultFuel"  hidden></option>
                                        <option value="Benzin">Benzin</option>
                                        <option value="Dizel">Dizel</option>

                                    </select>
                                </div>

                                <div className="select-inner">
                                    <p>Vites Tipi</p>
                                    <select 
                                        required  
                                        className="gear" 
                                        name="gear" 
                                        id="gear"
                                        value={gear}
                                        onChange={(e) => setGear(e.target.value) }
                                    >
                                        <option value="defaultGear"  hidden></option>
                                        <option value="Otomatik">Otomatik</option>
                                        <option value="Manuel">Manuel</option>

                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="sell-inner-right">
                        <div className="inputs-title">
                            <h1>Araç Detaylarını Seçerek Devam Ediniz</h1>
                        </div>
                        <div className="right-inputs">
                            <div className="right-inner-inputs">

                                <div className="select-inner">
                                    <p>Kilometre</p>
                                    <input 
                                        type="text" 
                                        name="km" 
                                        required="required"
                                        value={km}
                                        onChange={handleChangeKm}
                                    />
                                </div>

                                <div className="select-inner">
                                    <p>Fiyat</p>
                                    <input 
                                        type="text" 
                                        name="price"
                                        required="required" 
                                        value={price}
                                        onChange={handleChangePrice}
                                    />
                                </div>

                                <div className="select-inner">
                                    <p>Plaka</p>
                                    <input 
                                        type="text" 
                                        name="price"
                                        required="required" 
                                        value={plate}
                                        onChange={(e) => setPlate(e.target.value)}
                                    />
                                </div>
                                <div className="select-inner">
                                    <p>Renk</p>
                                    <input 
                                        type="text" 
                                        name="price"
                                        required="required" 
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}
                                    />
                                </div>

                                <div className="select-inner-button">
                                    <button onClick={handleCreateCar} className="main-btn">Araç Oluştur</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sell