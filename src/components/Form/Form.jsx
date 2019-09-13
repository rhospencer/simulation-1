import React, {Component} from 'react'

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            urlText: '',
            name: '',
            price: ''
        }
    }

    handleUrlTextChange(e) {
        this.setState({urlText: e.target.value})
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

    handlePriceChange(e) {
        this.setState({name: e.target.value})
    }

    render() {
        return(
            <div>
                Form
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <button>Cancel</button>
                <button>Add</button>
            </div>
        )
    }
}