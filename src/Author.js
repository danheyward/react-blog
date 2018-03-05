import React, { Component } from 'react';

class Author extends Component {
  render() {

    const { name } = this.props

    return (
      <p className='authors'>Written by {name}</p>
    )
  }
}

export default Author;
