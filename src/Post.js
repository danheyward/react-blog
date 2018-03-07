import React, { Component } from 'react';
import Comment from './Comment';
import Author from './Author';

class Post extends Component {
  constructor(props) {
    super()
    this.state = {
      body: props.body,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      body: e.target.value
    })
  }

  changeBody(e) {
    let newBody = prompt('What do you wanna say?')
    this.setState({
      body: newBody
    })
  }

  render() {

    const { title, authors, body, comments } = this.props

    let allComments = comments.map(function(comment, index) {
      return <Comment text={comment} id={index + 1} key={index} />
    })

    let allAuthors = authors.map(function(author, index) {
      return <Author name={author} key={index} />
    })

    return (
      <div className='div-wrapper'>
        <h1 className='title'>{title}</h1>
        {allAuthors}
        <p>{this.state.body}</p>
        <input value={this.state.value} onChange={this.handleChange}/>
        <button onClick={ (e) => this.changeBody(e) }>Change Body</button>
        <h3 className='comments-title'>Comments:</h3>
        {allComments}
      </div>
    );
  }
}

export default Post;
