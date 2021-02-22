import './App.css';
import Table from './components/Table'
import React, { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }



  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
    .then(results => results.json())
    .then(results => {
      console.log(results);
      this.setState({ users: results.results });
    });
  }


  render() {
    return (
      <div className="App">
        <Table users={ this.state.users } handleDeleteRow={ this.handleDeleteRow} />
     
            

      </div>

      
    );
  }
}

export default App;
