import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import FaveFood from './FaveFood';
import FaveMovie from './FaveMovie';
import About from './About';
import '../App.css';


class App extends Component {

  render() {

    const { title, authors, body, comments } = this.props

    return (
      <Router>
        <div>
          <nav>
            <Link to='/'>Home Page</Link>
            <Link to='/about'>About</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/favorite-food'>Favorite Food</Link>
            <Link to='/favorite-movie'>Favorite Movie</Link>
          </nav>
          <Route exact path='/' component={Home} />
          <Route exact path='/posts' component={ () => (
            <Post
            title={title}
            authors={authors}
            body={body}
            comments={comments}
            />
            )}
          />
          <Route exact path='/favorite-food' component={FaveFood} />
          <Route exact path='/favorite-movie' component={FaveMovie} />
          <Route exact path='/about' component={About} />
        </div>
      </Router>
    )
  }
}

export default App
