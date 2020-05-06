import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/user';
import Followers from './components/followers';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      users: [],
      followers: [],
    }
  }

  componentDidMount () {
    axios.get("https://api.github.com/users/shantelb")
    .then(response => {
      this.setState({users: response.data})
      console.log(response)
    })
    axios.get("https://api.github.com/users/ShantelB/followers")
    .then(res => {
      this.setState({followers: res.data});
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
  return (
    <div className="App">
      
      <div>
        <h1>Hello User</h1>
       
        <User users={this.state.users}  />
        </div>

        <div>

       <Followers followers={this.state.followers} />
          </div>
    </div>
  );
 };
}

export default App;
