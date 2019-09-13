import React, {Component} from 'react'
import Logo from '../../assets/logo.png'

export default class Header extends Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return(
            <div>
                <header>
                    <img src={Logo} alt="Shelfie Logo"/>
                    <h1>Shelfie</h1>
                </header>
            </div>
        )
    }
}