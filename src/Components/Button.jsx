import React from 'react'

const Button = (props) => {
  return (
    <button className={(`bg-primary-50 text-white-10 px-7 py-2 rounded-lg + ${props.className}`)}>
    {props.text}
    </button>
  )
}

export default Button