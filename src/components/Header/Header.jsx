import React from 'react'
import Logo from '../../assets/logo.png'
import {Link, withRouter} from 'react-router-dom'

export default function Header() {
        return(
            <div>
                <header>
                    <img src={Logo} alt="Shelfie Logo"/>
                    <h1>Shelfie</h1>
                    <Link to="/" className="link">Dashboard</Link> 
                    <Link to="/add" className="link">Add Inventory</Link>
                </header>
            </div>
        )
    }
