import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: null,
            name: '',
            price: '',
            img: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentItem !== prevProps.id) {
            
        }

    }

    handleImgChange(e) {
        this.setState({img: e.target.value})
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

    handlePriceChange(e) {
        this.setState({price: e.target.value})
    }

    cancelInput() {
        this.setState({
            name: '',
            price: '',
            img: ''
        })
    }

    addProduct() {
        axios.post('/api/product', this.state).then(res => {
            console.log('test')
            this.props.getInventory()
        })
        this.cancelInput()
    }

    render() {
        return(
            <div className="form">
                
                <h3>Image URL: </h3>
                <input onChange={(e) => this.handleImgChange(e)}  value={this.state.img} type="text"/>
                <h3>Product Name: </h3>
                <input onChange={(e) => this.handleNameChange(e)} value={this.state.name} type="text"/>
                <h3>Price: </h3>
                <input onChange={(e) => this.handlePriceChange(e)} value={this.state.price} type="text"/>
                <div className="button-holder">
                    <button onClick={() => this.cancelInput()}>Cancel</button>
                    <button onClick={() => this.addProduct()}>Add</button>
                </div>
            </div>
        )
    }
}