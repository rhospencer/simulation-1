import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editToggle: false
        }
    }

    // toggleEdit() {
    //     this.state({editToggle: !this.state.editToggle})
    // }

    render() {
        return(
            <div className="product">
                <div className="image-holder">
                    <img src={this.props.img} alt=""/>
                </div>
                <div className="info-holder">
                    <div className="info">
                        {this.props.name} <br/>
                        ${this.props.price} 
                    </div>
                    <div className="product-buttons">
                        <Link to="/"><button onClick={() => this.props.deleteItem(this.props.id)}>Delete</button></Link>
                        <Link to={`/edit/${this.props.id}`} id={this.props.id}><button>Edit</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Product)