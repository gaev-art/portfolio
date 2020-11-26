import React from 'react'
import style from './MenuIcon.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const MenuIcon = props => <a href={props.href} style={{marginLeft: '20px'}}>
  <FontAwesomeIcon icon={props.icon} size="lg" className={style.navMenuIcon}/>
</a>


export default MenuIcon
