import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiFillPicture, AiFillTags } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { BsFillCreditCardFill } from 'react-icons/bs'
interface Props {
  className: string
}
export default function FooterMobile({ className }: Props) {
  return (
    <div
      className={
        className ? `${className} fixed bottom-0 left-0 right-0  bg-cloud ` : `fixed bottom-0 left-0 right-0 bg-cloud`
      }
    >
      <ul className='flex items-center justify-around h-full'>
        <li className='flex items-center p-3'>
          <AiFillPicture size={27} color='ee4d2d' />
        </li>
        <li className='flex items-center p-3'>
          <AiFillTags size={27} color='ee4d2d' />
        </li>
        <li className='flex items-center rounded-[50%] bg-bgside p-3'>
          <AiOutlineHome color='ee4d2d' size={35} />
        </li>
        <li className='flex items-center p-3'>
          <BsFillCreditCardFill size={27} color='ee4d2d' />
        </li>
        <li className='flex items-center p-3'>
          <FaUserFriends size={27} color='ee4d2d' />
        </li>
      </ul>
    </div>
  )
}
