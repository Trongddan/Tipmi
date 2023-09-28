import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'

interface Props {
  children: React.ReactNode
}
export default function ModalPreview({ children }: Props) {
  return (
    <>
      {children}
      <div className='fixed top-0 bottom-0 left-0 right-0 bg-bgOverlay z-[1] grid place-items-center'>
        <span className='absolute top-4 right-4'><FaRegTimesCircle color={'#fff'} size={30} /></span>
        {/* <div className='lg:max-w-7xl h-auto overflow-hidden'>{children}</div> */}
      </div>
    </>
  )
}
