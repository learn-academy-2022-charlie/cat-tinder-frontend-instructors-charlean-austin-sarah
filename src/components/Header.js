import React, { Component } from 'react'
import catLogo from '../assets/cat-logo.png'

class Header extends Component {
  render() {
    return (
      <header>
        <img src={catLogo} alt="logo for Cat Tinder" className="cat-logo" />
      </header>
    )
  }
}
export default Header