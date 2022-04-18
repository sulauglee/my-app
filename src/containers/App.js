import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
class App extends Component {
  // state = {

  // };
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((users) => this.setState({ robots: users }));
    // this.setState({ robots: robots });
  }
  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filterdRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (!this.state.robots.length) {
      // (this.state.robots.length === 0) =(!this.state.robots.lengt) 
      return <h2 className="tc">Loading ...</h2>;
    }
    return (
      <div className="tc pa3">
        <h1 className="f1">robots frinds</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterdRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
