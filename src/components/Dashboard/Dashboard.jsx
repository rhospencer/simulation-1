import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inventory: []
        }
    }

    componentDidMount() {
        this.getInventory()
      }

    deleteItem = (id) => {
        axios.delete(`/api/product/${+id}`).then(res => {
            this.getInventory()
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
            <div className="holder">
                {inventoryList}
            </div>
        )
    }
}

export default withRouter(Dashboard)