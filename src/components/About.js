import React, { Component } from 'react';
import Weather from './Weather'
const axios = require('axios');

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipcode: '',
      name: '',
      description: '',
      temperature: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    let weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=' + this.state.zipcode + ',us&units=Imperial&appid=052f26926ae9784c2d677ca7bc5dec98'
    console.log(weatherUrl)
    axios.get(weatherUrl)
      .then( (response) => {
        console.log(response)
        this.setState({
          name: response.data.name,
          description: response.data.weather[0].description,
          temperature: response.data.main.temp
        })
      })
      .catch( (error) => console.log('AINT NO WEATHER THERE, YO') )
  }

  handleChange(e) {
    this.setState({
      zipcode: e.target.value
    })
    console.log(e.target.value)
  }

  render() {

    return(
      <div>
        <h1>COOL ASS BRO, YO</h1>
        <h3>WANNA TALK WEATHER, YO?</h3>
        <div className='row centered'>
          <label className='weather center' htmlFor='zip'>TELL ME WHERE YOU LIVE, YO</label><br />
          <input className='col s4 offset-s4 center weather' name='zip' type='text' onChange={this.handleChange} placeholder='GIMME THAT ZIP, YO'/><br />
        </div>
          <button onClick={this.handleSubmit}>CLICK ME, YO</button>
        <div>
          <Weather
            name={this.state.name}
            desc={this.state.description}
            temp={this.state.temperature}
          />
        </div>
      </div>
    )
  }
}

export default About
