import React, { Component } from 'react';
import Comment from './Comment';
import Author from './Author';

class Post extends Component {
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
        <p>{body}</p>
        <h3 className='comments-title'>Comments:</h3>
        {allComments}
      </div>
    );
  }
}

export default Post;
