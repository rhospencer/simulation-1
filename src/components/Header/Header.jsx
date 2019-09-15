import React from 'react'
import Logo from '../../assets/logo.png'
import {Link, withRouter} from 'react-router-dom'

function Header() {
        return(
            <div>
                <header>
                    <img src={Logo} alt="Shelfie Logo"/>
                    <h1>Shelfie</h1>
                    <Link to="/" className="link"><button>Dashboard</button></Link> 
                    <Link to="/add" className="link"><button>Add Inventory</button></Link>
                </header>
            </div>
        )
    }

    export default withRouter(Header)