import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './CSS/index.css';
import Game from './Components/Game';
// import Header from './Components/Header';


class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/"><img id="lightning" src="lightning.svg" alt="lightning bolt"></img></Link>
        <Link to="/titus">TiTus</Link> |
        <Link to="/netflix">Netflix</Link> |
        <Link to="/github">GitHub</Link>
      </div >
    );
  }
}

class Routes extends Component {
  render() {
    return (
      <Router >
        <div>
          <Navbar />
          <hr />
          <Route name="home" exact path="/" component={this.name}></Route>
          <h1>Marcus' Tic Tac Toe Game</h1>
          <h3>Play a game with a friend!</h3>
          <Route name="TiTus" exact path="/titus" component={this.name} />
          <Route name="Netflix" exact path="/netflix" component={this.name} />
          <Route name="GitHub" exact path="/github" component={this.name} />
        </div>
      </Router>
    );
  }
}



// ========================================
ReactDOM.render(<Routes />, document.getElementById('header-container'));

ReactDOM.render(<Game />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
