import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="top">
                    <div className="top-inner">
                        <div className="logo">
                            <div className="left">
                                <img src="https://cdn.otoplus.com/assets-1702037463567/img/logo-home@2x.png" alt="" />
                                <p>Aracımı nasıl satarım, aracım kaç para  diye düşünme. Ücretsiz <br/> ekspertiz sonrası, <span>otoplus</span>  güvencesi ile anında para hesabında!</p>
                                <button>HEMEN SAT</button>
                            </div>
                            <div className="hrefs">
                                <ul>
                                    <li>Hakkımızda</li>
                                    <li>Biz Kimiz?</li>
                                    <li>Expertiz Merkezlerimiz</li>
                                    <li>Müşterilerimiz Neler Diyor?</li>
                                    <li>İletişim</li>
                                </ul>
                            </div>
                            <div className="hrefs">
                                <ul>
                                    <li>Yardım</li>
                                    <li>Aracımı Satmak İstiyorum</li>
                                    <li>Sıkça Sorulan Sorular</li>
                                    <li>Canlı Yardım</li>
                                </ul>
                            </div>
                            <div className="hrefs">
                                <ul>
                                    <li>otoplus hakkında</li>
                                    <li>Nasıl Çalışır?</li>
                                    <li>Genel İşlem Koşulları</li>
                                    <li>Kişisel Verilerin Korunması</li>
                                    <li>Çerez Politikası</li>
                                </ul>
                            </div>
                        </div>
                        <div className="help">
                            <h1>Yardım için buradayız!</h1>
                            <p>Aklına takılan bir soru olursa bize ulaşabilir veya dilersen bu bölüme göz atabilirsin: <span>Sıkça Sorulan Sorular </span> <br/> 0850 955 50 50  </p>
                            <p>Hafta içi hergün ve Cumartesi 09:00 - 18:00</p>

                        </div>
                        <div className="warning">
                            <h1>Yasal uyarı:</h1>
                            <p>Kullanılan markalar ve logolar, otoplus letgo'ya ait olmayan tescilli ticari markalardır ve yetkili makamlara kayıtlı ilgili sahiplerin mülkiyetindedir. Bu platformda markaların ve logoların kullanımı yalnızca bilgilendirme amaçlıdır ve hiçbir şekilde tanıtım yapılmaz.</p>
                            <p>Web sitesinde gösterilen araçların özellikleri, görüntüleri, detayları, fiyatı, garanti ve sigorta bilgileri sehven farklılıklar gösterebilmekte olup bu bilgiler, bağlayıcı, kesin ve geçerli bir teklif niteliği taşımamaktadır. Araçlarla ilgili otoplus lokasyonlarında sağlanan bilgiler nihai ve geçerli olup otoplus tüm bu bilgilerde önceden haber vermeksizin değişiklik yapma hakkına sahiptir.</p>
                            <p>Garanti kapsamı, İkinci El Motorlu Kara Taşıtlarının Ticareti Hakkındaki Yönetmelik (“Yönetmelik”) uyarınca kanuni olarak 8 yaşın veya 160bin km'nin altındaki araçlar için geçerlidir. Yönetmelik kapsamındaki şartları/limitleri sağlamayan araçlar garanti kapsamına girmemektedir.</p>
                        </div>
                        <div className="extra">

                            <h1>Popüler Hizmetler</h1>
                            <p>aracımı satmak istiyorum</p>
                            <p>sahibinden satılık araç</p>
                            <p>aracım ne kadar eder</p>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="icon-container">
                        <div className="left">
                            <p>© 2023 otoplus, Tüm Hakları Saklıdır</p>
                        </div>
                        <div className="right">
                            <FaFacebookF className='text-white mr-[20px] cursor-pointer text-xl'/>
                            <FaTwitter className='text-white mr-[20px] cursor-pointer text-xl'/>
                            <FaInstagram className='text-white mr-[20px] cursor-pointer text-xl'/>
                        </div>
                    </div>
                </div> 
            </footer>
        </div>
    )
}

export default Footer