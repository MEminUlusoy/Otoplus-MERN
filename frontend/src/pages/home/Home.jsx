import React from 'react'
import "./home.css"
import { FaCar } from "react-icons/fa6";

const Home = () => {
    return (
        <div>

            <main>
                <div className="image-container">
                    <img src="https://cdn.otoplus.com/assets-1702037463567/img/slider-bg-3.jpg" alt="" />
                </div>
                <div className="inner">
                    <div className="left">
                        <div className="left-inner">
                            <h1>Aracını 3 kolay adımda sat! <br /> Aracının değerini biliyor musun?</h1>
                            <p>otoplus'ta aracının değerini 1 dakikada öğren, <br /> aracını kolayca sat, paran anında hesabına gelsin!</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="pricing-container">
                            <div className="pricing-inner-container">
                                <div className="pricing-inner-top">
                                    <h1>Aracını Sat</h1>
                                    <p>Satmak istediğin aracın bilgilerini seç</p>
                                </div>
                                <div className="pricing-inner-middle">
                                    <select required defaultValue={'defaultYear'}   className="year" name="year" id="year">
                                        <option value="defaultYear" disabled  hidden>Model Yılı</option>
                                        <option value="year1">2022</option>
                                        <option value="year2">2021</option>
                                        <option value="year3">2020</option>
                                        <option value="year4">2019</option>
                                    </select>
                                    <select required defaultValue={'defaultBrand'} className="brand" name="cars" id="cars">
                                        <option value="defaultBrand" disabled  hidden>Marka</option>
                                        <option value="volvo">Volvo</option>
                                        <option value="bmw">BMW</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    <select required defaultValue={'defaultModel'} className="model" name="model" id="model">
                                        <option value="defaultModel" disabled  hidden>Model</option>
                                        <option value="corolla">Corolla</option>
                                        <option value="egea">Egea</option>
                                        <option value="meriva">Meriva</option>
                                        <option value="passat">Passat</option>
                                    </select>
                                </div>
                                <div className="pricing-inner-bottom">
                                    <button>Ön fiyat teklifi al</button>
                                    <p>Aracımı yukarıda bulamıyorum</p>
                                </div>
                                <div className="pricing-inner-icon">
                                    <FaCar className='text-[16px] text-[#ff3f55] ml-[20px]'/>
                                    <p>Son 30 günde <span>26.184 kişi</span>  aracına teklif aldı</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="steps">
                <div className="inner-steps">
                    <div className="inner-top">
                        <h1>Aracını 3 kolay adımda sat</h1>
                        <p>Aracını değerinde satın alıyoruz, paranı anında yatırıyoruz.</p>
                    </div>
                    <div className="inner-bottom">
                        <div className="steps-icons">
                            <div className="explanation">
                                <h1>Ön fiyat teklifi</h1>
                                <p>Bilgilerini gir, ön fiyat teklifini ve randevunu al.</p>
                            </div>
                            <div className="icon-image">
                                <img src="https://cdn.otoplus.com/assets-1702037463567/img/badges/new/12@2x.png" alt="" />
                            </div>


                        </div>
                        <div className="steps-icons">
                            <div className="explanation">
                                <h1>Ücretsiz ekspertiz yaptır</h1>
                                <p>Ekspertiz sonrasında son fiyat teklifini öğren.</p>
                            </div>
                            <div className="icon-image">
                                <img src="https://cdn.otoplus.com/assets-1702037463567/img/badges/new/8@2x.png" alt="" />
                            </div>

                        </div>
                        <div className="steps-icons">
                            <div className="explanation">
                                <h1>Ödemeni anında al</h1>
                                <p>Aracını kolayca sat, paranı anında al.</p>
                            </div>
                            <div className="icon-image">
                                <img src="https://cdn.otoplus.com/assets-1702037463567/img/badges/new/11@2x.png" alt="" />
                            </div>


                        </div>
                    </div>
                </div>

            </div>


            <div className="advantages">
                <div className="advantages-inner">
                    <div className="advantages-title">
                        <h1>Aracını otoplus'a satmanın artıları</h1>
                    </div>
                    <div className="advantages-icons">
                        <div className="icons-container">
                            <div className="icon-top">
                                <img src="https://cdn.otoplus.com/assets-1702037463567/img/badges/new/car_icon.png" alt="" />
                            </div>
                            <div className="icon-bottom">
                                <h1>Şeffaf</h1>
                                <p>Ekspertiz sürecini profesyonel ve şeffaf bir şekilde gerçekleştiriyoruz.</p>
                            </div>
                        </div>
                        <div className="icons-container">
                            <div className="icon-top">
                                <img src="https://cdn.otoplus.com/assets-1702037463567/img/badges/new/plus_icon.png" alt="" />
                            </div>
                            <div className="icon-bottom">
                                <h1>Güvenilir</h1>
                                <p>Aracını değerinde fiyatlıyoruz, paranı anında hesabına yatırıyoruz.</p>
                            </div>
                        </div>
                        <div className="icons-container">
                            <div className="icon-top">
                                <img src="https://cdn.otoplus.com/assets-1702037463567/img/badges/new/clock_icon.png" alt="" />
                            </div>
                            <div className="icon-bottom">
                                <h1>Hızlı</h1>
                                <p>Ekspertizden satışa kadar tüm süreci iki saat içinde tamamlıyoruz.</p>
                            </div>
                        </div>
                    </div>
                    <div className="advantages-button">
                        <button>Aracını sat</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home