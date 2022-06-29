import React, { Component } from 'react'
import raisins from '../assets/raisins.jpeg'

class Home extends Component {
  render() {
    return (
      <div className="page-body">
        <h4>It's like Tinder, but for Cats.</h4>
        <br />
        <img src={raisins} alt="portrait of a flat-faced cat" className="raisins" />
      </div>
    )
  }
}
export default Home