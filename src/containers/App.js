import React, { Component, useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


function App() {
  /* constructor() {
    super(); // children class constructor should call parent class
    this.state = {  // constructor
      robots: [],
      searchfield: ''
    }
  } */
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  /* componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users}));
  } */

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  },[]) // Only run if [] changes( which will NEVER change). 
        // [] empty array will prevent the useEffect() from running
        // repeatedly in an infinite loop.

  /* onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  } */
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

    // Destructuring
    /* const { robots, searchfield } = this.state; */
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
          <SearchBox searchChange = {onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
    }
}

export default App;