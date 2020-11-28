import './App.css';
import {Component} from 'react';
import {Container} from '@material-ui/core';
import Post from './post';

class App extends Component {
  constructor() {
    super();
    this.state = {
        posts: [
          {title: 'one', key: 0, likes: 0},
          {title: 'two', key: 1, likes: 0},
          {title: 'one', key: 2, likes: 0},
        ]
    }
  }
  addLike = postToLike => {
    postToLike.likes = postToLike.likes + 1
    let posts = this.state.posts
    this.setState({posts});
  }
  render () { return (
    <div className="app">
      <Container className="blog">
        <h1>Blog</h1>
        <Post posts={this.state.posts} addLike={this.addLike}/>
      </Container>
    </div>
  ) }
}

export default App;
