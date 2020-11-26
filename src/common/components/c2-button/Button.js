import React from 'react'
import style from './Button.module.scss'


const Button = props => (
  <div className={style.main}>
    <a href={props.href} className={style.btn}>
      {props.value}
    </a>
  </div>
)

export default Button
