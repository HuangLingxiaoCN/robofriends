import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends Component {
  constructor() {
    super(); // children class constructor should call parent class
    this.state = {  // constructor
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    // Destructuring
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      //
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    // when the request fetch is slow, it shows loading
    if (!robots.length) { // robots.length === 0
      return <h1>Loading</h1>
    }
    else {
      return (
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;