import React from 'react'
import "./sell.css"

const Sell = () => {
    return (
        <div>
            <form>
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
                                        <select required defaultValue={'defaultBrand'} className="brand" name="brand" id="brand">
                                            <option value="defaultBrand" disabled  hidden></option>
                                            <option value="Volvo">Volvo</option>
                                            <option value="BMW">BMW</option>
                                            <option value="Opel">Opel</option>
                                            <option value="Audi">Audi</option>
                                        </select>
                                    </div>

                                    <div className="select-inner">
                                        <p>Model</p>
                                        <select required defaultValue={'defaultModel'} className="model" name="model" id="model">
                                            <option value="defaultModel" disabled  hidden></option>
                                            <option value="XC90">XC90</option>
                                            <option value="5.20">5.20</option>
                                            <option value="Meriva">Meriva</option>
                                            <option value="A6">A6</option>
                                        </select>
                                    </div>

                                    <div className="select-inner">
                                        <p>Model Yılı</p>
                                        <select required defaultValue={'defaultYear'} className="year" name="modelYear" id="modelYear">
                                            <option value="defaultYear" disabled  hidden></option>
                                            <option value="2022">2022</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="2019">2019</option>
                                        </select>
                                    </div>

                                    <div className="select-inner">
                                        <p>Yakıt Tipi</p>
                                        <select required defaultValue={'defaultFuel'} className="fuel" name="fuel" id="fuel">
                                            <option value="defaultFuel" disabled  hidden></option>
                                            <option value="Benzin">Benzin</option>
                                            <option value="Dizel">Dizel</option>

                                        </select>
                                    </div>

                                    <div className="select-inner">
                                        <p>Vites Tipi</p>
                                        <select required defaultValue={'defaultGear'} className="gear" name="gear" id="gear">
                                            <option value="defaultGear" disabled  hidden></option>
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
                                        <input type="text" name="km" required="required" />
                                    </div>

                                    <div className="select-inner">
                                        <p>Fiyat</p>
                                        <input type="text" name="price" required="required" />
                                    </div>

                                    <div className="select-inner-button">
                                        <button  className="main-btn" type="submit">Araç Oluştur</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Sell