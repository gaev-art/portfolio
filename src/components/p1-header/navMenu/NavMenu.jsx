import React from 'react'
import style from './NavMenu.module.scss'
import {faInstagram, faLinkedinIn, faTelegram} from '@fortawesome/free-brands-svg-icons'
import MenuIcon from './Icon/MenuIcon'
import MenuItem from './Item/MenuItem'

const NavMenu = () => (
  <nav className={style.navMenu}>
    <div className={style.MenuIcons}>
      <MenuIcon href='https://telegram.me/gaev_art' icon={faTelegram}/>
      <MenuIcon href='https://www.instagram.com/gaev_art/' icon={faInstagram}/>
      <MenuIcon href='https://www.linkedin.com/in/artsiom-gaev-29a4551a8/' icon={faLinkedinIn}/>
    </div>
    <div className={style.menuItems}>
      <MenuItem title='Home' href='banner'/>
      <MenuItem title='About' href='about'/>
      <MenuItem title='Projects' href='projects'/>
      <MenuItem title='Contacts' href='contacts'/>
    </div>
  </nav>
)

export default NavMenu
