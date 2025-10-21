import React from 'react'

export default function IconWrapper({children}: {children: React.ReactNode}) {
  return (
    <div className='rounded-lg hover:scale-150 cursor-pointer transition duration-750 '>
        {children}
    </div>
  )
}
