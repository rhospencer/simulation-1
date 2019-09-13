import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    deleteItem = (id) => {
        axios.delete(`/api/product/${+id}`).then(res => {
            this.props.getInventory()
        })
    }

    render() {
        let inventoryList = this.props.inventory.map(el => {
            return <Product 
                        key={el.id}
                        id={el.id}
                        data={el}
                        name={el.name}
                        price={el.price}
                        img={el.img}
                        deleteItem={this.deleteItem}
                    />
        })
        return(
            <div>
                {inventoryList}
            </div>
        )
    }
}