import React, { Component } from 'react'
import catLogo from '../assets/cat-logo.png'
import { NavLink } from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <header>
        <NavLink to='/'>
          <img src={catLogo} alt="logo for Cat Tinder" className="cat-logo" />
        </NavLink>
        <NavLink to='/catindex'>
          <p>See all the cats</p>
        </NavLink>
        <NavLink to='/catnew'>
          <p>Add a cat</p>
        </NavLink>
      </header>
    )
  }
}
export default Header