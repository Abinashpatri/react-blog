import './header.css'
import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className='headerImg' src="https://unsplash.it/1920/1080" alt="" />
    </div>
  )
}

export default Header