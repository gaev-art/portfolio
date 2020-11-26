import React from 'react'
import style from './MenuItem.module.scss'
import {Link} from 'react-scroll'


const MenuItem = props => <Link
  className={style.menuItem}
  activeClass={style.active}
  to={props.href}
  spy={true}
  smooth={true}
  offset={0}
  duration={500}>
  {props.title}
</Link>


export default MenuItem
