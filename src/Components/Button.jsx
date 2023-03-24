import React from 'react'

const Button = (props) => {
  return (
    <button className={(`bg-primary-50 text-white-10 px-7 py-4 rounded-lg hover:bg-secondary-10 + ${props.className}`)}>
    {props.text}
    </button>
  )
}

export default Button