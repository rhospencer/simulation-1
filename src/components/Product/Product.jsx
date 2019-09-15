import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

export default class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return(
            <div className="product">
                <div className="image-holder">
                    {this.props.img}
                </div>
                <div className="info-holder">
                {this.props.name} <br/>
                {this.props.price} 
                <button onClick={() => this.props.deleteItem(this.props.id)}>Delete</button>
                <Link to={`/edit/${this.props.id}`} ><button>Edit</button></Link>
                </div>
            </div>
        )
    }
}