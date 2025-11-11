import React from 'react'

export default function IconWrapper({children}: {children: React.ReactNode}) {
  return (
    <div className='rounded-lg hover:scale-120 cursor-pointer transition duration-300 '>
        {children}
    </div>
  )
}
