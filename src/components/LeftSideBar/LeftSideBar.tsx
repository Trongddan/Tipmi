import React from 'react'
import Avatar from '../Avatar'
import avt from '../../assets/image/avt.jpg'
import { AiFillPicture, AiFillTags } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { BsFillCreditCardFill } from 'react-icons/bs'
export default function LeftSideBar() {
  return (
    <div className='hidden lg:block  fixed left-0 top-[52px] bg-bgside h-[calc(100vh-52px)] lg:max-w-[25%]'>
      <ul className='p-4 flex flex-col gap-1'>
        <li className='flex items-center gap-4 hover:bg-cloud py-2 px-2 rounded-md '>
          <Avatar src={avt} size={40} alt='' />
          <span className='text-base font-semibold px-2'>Đoàn Trọng Đán</span>
        </li>
        <li className='flex items-center gap-4 hover:bg-cloud py-4 px-2 rounded-md '>
          <FaUserFriends color='ee4d2d' size='25' />
          <span className='text-base font-semibold'>Bạn bè</span>
        </li>
        <li className='flex items-center gap-4 hover:bg-cloud py-4 px-2 rounded-md '>
          <AiFillPicture color='ee4d2d' size='25' />
          <span className='text-base font-semibold'>Ảnh</span>
        </li>
        <li className='flex items-center gap-4 hover:bg-cloud py-4 px-2 rounded-md'>
          <AiFillTags color='ee4d2d' size='25' />
          <span className='text-base font-semibold'>Đã lưu</span>
        </li>
        <li className='flex items-center gap-4 hover:bg-cloud py-4 px-2 rounded-md'>
          <BsFillCreditCardFill color='ee4d2d' size='25' />
          <span className='text-base font-semibold'>Đơn đặt hàng và thanh toán</span>
        </li>
      </ul>
    </div>
  )
}
