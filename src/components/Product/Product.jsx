import React, {Component} from 'react'

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
                <button onClick={() => this.props.getCurrentItem(this.props.data)}>Edit</button>
                </div>
            </div>
        )
    }
}