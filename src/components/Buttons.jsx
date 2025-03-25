import React from 'react'

const Buttons = ({children}) => {
  return (
    <div>
      <button id='filter-btn'>
            {children}
      </button>
    </div>
  )
}

export default Buttons
