import React, { FC } from 'react'

const HeaderBox: FC<HeaderBoxProps> = ({ text, title, type, user }) => {
  return (
    <div className='header-box'>
      <h1 className='header-box-title'>
        {title}

        {type === 'greeting' && (
          <span className='text-bankGradient'>
            &nbsp;{user}
          </span>
        )}
      </h1>
      <p className='header-box-subtext'>{text}</p>
    </div>
  )
}

export default HeaderBox