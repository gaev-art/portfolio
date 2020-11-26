import React from 'react'
import style from './BurgerNavMenu.module.scss'
import {faGithub, faInstagram, faLinkedinIn, faTelegram} from '@fortawesome/free-brands-svg-icons'
import MenuIcon from './icon/MenuIcon'
import MenuItem from './item/MenuItem'


const BurgerNavMenu = () => (
  <nav className={style.navMenu}>
    <div className={style.MenuIcons}>
      <MenuIcon href='https://telegram.me/gaev_art' icon={faTelegram}/>
      <MenuIcon href='https://www.instagram.com/gaev_art/' icon={faInstagram}/>
      <MenuIcon href='https://www.linkedin.com/in/artem-gaev-29a4551a8/' icon={faLinkedinIn}/>
      <MenuIcon href='https://github.com/gaev-art' icon={faGithub}/>
    </div>
    <div className={style.menuItems}>
      <MenuItem title='Home' href='banner'/>
      <MenuItem title='About' href='about'/>
      <MenuItem title='Projects' href='projects'/>
      <MenuItem title='Contacts' href='contacts'/>
    </div>
  </nav>
)

export default BurgerNavMenu
