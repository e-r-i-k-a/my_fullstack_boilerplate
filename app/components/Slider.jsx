import React, { Component } from 'react';

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      range: '50'
    };
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  componentDidMount() {
    // axios.get('API')
    // .then(res => res.data)
    // .then((stuff => {
    //   this.setState({stuff})
    // })
    // or
    // window.fetch('API')
    //   .then(res => res.json())
    //   .then((items) => {
    //     return this.setState({})
    //   })
  }

  handleSliderChange(e) {
    let range = e.target.value
    this.setState({range})
  }

  render() {
    // console.log('state', this.state)
    return (
      <div className="slider">
        <input
          onChange={this.handleSliderChange}
          type="range"
          min="0"
          max="100"
          // ref={(input) => { this.input = input; }}
          className="slider"
          id="myRange">
        </input>
        <span className="range">{this.state.range}%</span>
      </div>
    )
  }
}
