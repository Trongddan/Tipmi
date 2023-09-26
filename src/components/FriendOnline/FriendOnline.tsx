import React from 'react'
import Avatar from '../Avatar'
import avt from '../../assets/image/images.jpg'
export default function FriendOnline() {
  return (
    <div className='flex gap-3 items-center my-2 hover:bg-cloud py-2 px-2 rounded-md'>
      <Avatar status src={avt} size={40} alt='' />
      <span>Nguyễn Thị Hồng Lê</span>
    </div>
  )
}
