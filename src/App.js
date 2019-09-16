import React, { Component } from 'react';
import './App.css';
import { robots } from './robots';
import CardList from './components/card-list/CardList.component';
import SearchBox from './components/Search-box/SearchBox.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: robots,
      searchField: ''
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({
      searchField: event.target.value
    });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    return (
      <div className="tc">
        <h1 className="f2">RoboAmigos</h1>
        <SearchBox
          search={this.state.searchfield}
          onSearchChange={this.onSearchChange}
        />
        <CardList robots={filteredRobots} />
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
