import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuClose = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className={`header__menu ${isMenuOpen ? 'menu-open' : 'menu'}`}>
          <div className="menu__icon" href="/" />
          <button type="button" onClick={() => setIsMenuOpen(prev => !prev)} className="menu__icon burger"><span></span></button>
          <nav className="menu__body">
            <div className="menu__body-inner">
              <ul className="menu__list">
                <li className="menu__item">
                  <NavLink onClick={menuClose} to="/aboutMe">about_me</NavLink>
                </li>
                <li className="menu__item">
                  <NavLink onClick={menuClose} to="/projects">my_projects</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
