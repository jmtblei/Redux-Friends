import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/LoginPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          </ul>
          <h2>Welcome to your Friend List!</h2>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/protected" component={FriendList}/>
        </div>
      </Router>
    );
  }
}

export default App;
