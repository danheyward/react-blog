import React, { Component } from 'react';

class Weather extends Component {

  render() {

    const { name, desc, temp } = this.props
    let adj = ''

    if (+temp > 80) {
      adj = 'hot-ass'
    } else if (+temp > 60) {
      adj = 'warm-ass'
    } else if (+temp > 40) {
      adj = 'chilly-ass'
    } else {
      adj = 'cold-ass'
    }

    if (name) {
    return (
      <div>
        <h1>YO {name}!</h1>
        <p>Your {adj} city is sitting at <strong>{temp}</strong> degrees, how crazy is that?</p>
      </div>
    )
    } else {
      return (
      <div></div>
    )
    }
  }
}

export default Weather
