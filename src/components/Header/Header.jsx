import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <section>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </section>
  )
}

export default Header