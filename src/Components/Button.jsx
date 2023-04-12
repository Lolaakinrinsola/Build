import React from 'react'
import { Link } from 'react-router-dom'

export const Button = (props) => {
  return (
    <button className={(`bg-primary-50 text-white-10 px-7 py-4 rounded-lg hover:bg-secondary-10 + ${props.className}`)}>
    {props.text}
    </button>
  )
}
export const LinksToPage = (props) => {
  return (
    <div className={props.divClassName}>
    <Link to={props.link} className={(`bg-primary-50 text-white-10 px-7 py-4 rounded-lg hover:bg-secondary-10 + ${props.className}`)}>
    {props.text}
    </Link>

    </div>
  )
}
