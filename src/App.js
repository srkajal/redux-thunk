import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Category from './components/category/Category';
import Comment from './components/comment/Comment';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/category">Home</Link>
              </li>
              <li>
                <Link to="/comment">Comment</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route exact path="/" component={Category} />
              <Route path="/category" component={Category} />
              <Route path="/comment" component={Comment} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
