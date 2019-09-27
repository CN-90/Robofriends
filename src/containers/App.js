import React, { Component } from 'react';
import './App.css';
import CardList from './../components/card-list/CardList.component';
import Scroll from './../components/scroll/Scroll.component';
import SearchBox from './../components/Search-box/SearchBox.component';
import ErrorBoundry from './../components/error-boundry/ErrorBoundry.component';
import { setSearchField } from './../redux/actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ ...this.state, robots: users }));
  }

  render() {
    const { robots } = this.state;
    const { searchField, setSearchField } = this.props;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return !robots.length ? (
      <h1 className="tc">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">RoboAmigos</h1>
        <SearchBox search={searchField} onSearchChange={setSearchField} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchField: state.searchField
});

const mapDispatchToProps = dispatch => ({
  setSearchField: event => dispatch(setSearchField(event.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
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
