import React, { Component } from 'react';

class Comment extends Component {
  render() {

    const { text, id } = this.props

    return (
      <div>
        <p>{id}. {text}</p>
      </div>
    )
  }
}

export default Comment;
