import React from 'react'
import './navigation.css'

const Navigation = () => {
    return (
        <div>
            <nav>
                <div className="left">
                    <a href="/"><img src="https://cdn.otoplus.com/assets-1702037463567/img/logo-home@2x.png" alt="" /></a>
                </div>
                <div className="middle">
                    <ul>
                        <li><a href="/carlist">Al</a></li>
                        <li><a href="/sell">Sat</a></li>
                        <li><a href="#">Takas</a></li>
                        <li><a href="#">Nasıl Çalışır?</a></li>
                        <li><a href="#">Otomag</a></li>
                    </ul>
                </div>
                <div className="right">
                    <a href="/login">
                        <button>Üye Ol / Giriş Yap</button>
                    </a>

                </div>
            </nav>
        </div>
    )
}

export default Navigation