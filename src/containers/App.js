import React, { Component } from 'react';
import './App.css';
import CardList from './../components/card-list/CardList.component';
import Scroll from './../components/scroll/Scroll.component';
import SearchBox from './../components/Search-box/SearchBox.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: ''
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ ...this.state, robots: users }));
  }

  onSearchChange(event) {
    this.setState({
      searchField: event.target.value
    });
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return !robots.length ? (
      <h1 className="tc">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">RoboAmigos</h1>
        <SearchBox search={searchField} onSearchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

// using new hooks

// const App = () => {
//   const [search, setSearch] = useState('');
//   const filteredRobots =
//     search === ''
//       ? robots
//       : robots.filter(robot =>
//           robot.name.toLowerCase().includes(search.toLowerCase())
//         );
//   return (
//     <div className="tc">
//       <h2>RoboAmigos</h2>
//       <SearchBox search={search} setSearch={setSearch} />
//       <CardList robots={filteredRobots} />
//     </div>
//   );
// };

export default App;
