import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [],
      currentItem: []
    }
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount() {
    this.getInventory()
  }

  getInventory() {
    axios.get('/api/inventory').then(res => {
      this.setState({inventory: res.data})
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-body">
          <div className="dashboard-holder">
            <Dashboard inventory={this.state.inventory} getInventory={this.getInventory}/>
          </div>
          <div className="form-holder">
            <Form getInventory={this.getInventory} currentItem={this.state.currentItem}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
