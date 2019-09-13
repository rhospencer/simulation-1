import React from 'react'
import Logo from '../../assets/logo.png'

export default function Header() {
        return(
            <div>
                <header>
                    <img src={Logo} alt="Shelfie Logo"/>
                    <h1>Shelfie</h1>
                </header>
            </div>
        )
    }
