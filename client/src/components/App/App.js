import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar/navbar.js';
import 'whatwg-fetch';

class App extends Component {
  state ={
    username:[]
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3001/api/test')
      .then(response => response.json())
      .then(username => this.setState({username}));
      //.then(json => console.log(json));
  }




  render() {
    return (
          <div>
          <Navbar / >
           <div className="nav">
          {this.state.username.length}          
          </div>
          </div>
                    
    );
  }
}

export default App;
