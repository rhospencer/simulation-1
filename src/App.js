import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import routes from './routes'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  constructor() {
    super()

    this.state = {
      // inventory: [],
      // currentItem: {}
    }
    // this.getInventory = this.getInventory.bind(this)
    // this.getCurrentItem = this.getCurrentItem.bind(this)
  }

  componentDidMount() {
    // this.getInventory()
  }

  // getInventory() {
  //   axios.get('/api/inventory').then(res => {
  //     this.setState({inventory: res.data})
  //   })
  // }

  // getCurrentItem(product) {
  //   this.setState({currentItem: product})
    
  // }


  render() {
    return (
      <HashRouter>
        <div className="App">
          {/* <Header> */}
            <Header />
            <Switch>
              <Route exact path="/" component={() => (
                <Dashboard />
              )} />
              <Route path="/add" component={() => (
                <Form/>
              )}/>
              <Route path="/edit/:id" component={() => (
                <Form />
              )}/>
            </Switch>
            
          {/* </Header> */}

          {/* <div className="main-body"> */}
            {/* <div className="dashboard-holder"> */}
              {/* <Dashboard inventory={this.state.inventory} getInventory={this.getInventory} getCurrentItem={this.getCurrentItem}/> */}
            {/* </div> */}
            {/* <div className="form-holder"> */}
              {/* <Form getInventory={this.getInventory} currentItem={this.state.currentItem}/> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </HashRouter>
    );
  }
}

export default App;
