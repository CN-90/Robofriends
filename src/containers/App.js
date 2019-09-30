import React, { Component } from 'react';
import './App.css';
import CardList from './../components/card-list/CardList.component';
import Scroll from './../components/scroll/Scroll.component';
import SearchBox from './../components/Search-box/SearchBox.component';
import ErrorBoundry from './../components/error-boundry/ErrorBoundry.component';
import { setSearchField, requestRobots } from './../redux/actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const {
      searchField,
      setSearchField,
      robots,
      error,
      isPending
    } = this.props;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return isPending ? (
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
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
  setSearchField: event => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
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
