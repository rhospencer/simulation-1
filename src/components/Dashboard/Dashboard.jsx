import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inventory: []
        }
    }

    componentDidMount() {
        console.log(this.state.inventory)
        this.getInventory()
      }

    deleteItem = (id) => {
        axios.delete(`/api/product/${+id}`).then(res => {
            this.state.getInventory()
        })
    }

    getInventory() {
        axios.get('/api/inventory').then(res => {
          this.setState({inventory: res.data})
        })
      }

    render() {
        let inventoryList = this.state.inventory.map(el => {
            return <Product 
                        key={el.id}
                        id={el.id}
                        data={el}
                        name={el.name}
                        price={el.price}
                        img={el.img}
                        deleteItem={this.deleteItem}
                        // getCurrentItem={this.props.getCurrentItem}
                    />
        })
        return(
            <div>
                {inventoryList}
            </div>
        )
    }
}