import React, { Component }from 'react';
const axios = require('axios');

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shakespeare1: '',
      shakespeare2: '',
      shakespeare3: ''
    }
  }

  componentDidMount() {
    // The url for our API
    let poemApi = 'http://ShakeItSpeare.com/api/poem'
    // Our fetch of the poemApi
    fetch(poemApi)
      .then( (response) => response.json() )
      .then( (json) => this.setState({ shakespeare1: json.poem }) )
      .catch( (error) => console.log('An error occurred while parsing!', error) )

    axios.get(poemApi)
      .then( (response) => this.setState({ shakespeare2: response.data.poem }) )
      .catch( (error) => console.log('An error occurred while parsing!', error) )

    axios({
      method: 'GET',
      url: poemApi
    })
    .then( (response) => this.setState({ shakespeare3: response.data.poem }) )

  }

  render() {

    let poetry1 = ''
    let poetry2 = ''
    let poetry3 = ''

    if (this.state.shakespeare1 && this.state.shakespeare2 && this.state.shakespeare3) {
      poetry1 = this.state.shakespeare1
      poetry2 = this.state.shakespeare2
      poetry3 = this.state.shakespeare3
    } else {
      poetry1 = 'Content...'
      poetry2 = 'Is...'
      poetry3 = 'Loading...'
    }
      return(
        <div>
          <h1>THIS IS A BLOG, YO</h1>
          <h3>MY FAVORITE SHAKESPEARE POEMS, YO</h3>
          <p>{poetry1}</p>
          <p>{poetry2}</p>
          <p>{poetry3}</p>
        </div>
    )
  }
}

export default Home
