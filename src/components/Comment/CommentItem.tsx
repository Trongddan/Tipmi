import React from 'react'
import avt from '../../assets/image/images.jpg'
import Avatar from '../Avatar'
import { AiFillHeart } from 'react-icons/ai'
export default function CommentItem() {
  return (
    <div>
      <div className='flex items-center gap-3'>
        <div className='w-[40px] h-full'>
          <Avatar size={40} src={avt} alt='' />
        </div>
        <div className='bg-bgside w-[calc(100%-40px)] px-3 py-1 rounded-lg relative'>
          <p className='text-base font-light'>
            Xin chào tất cả mọi người . Minh la danken , hom nay la trung thu , mọi người đi chơi vui vẻ chứ
          </p>
          <p className='text-seconde text-xs my-2 text-left'>12 giờ trước</p>
          <div className=''>
            <ul className='flex gap-3 text-xs font-bold text-seconde'>
              <li>Thích</li>
              <li>Phản hồi</li>
              <li>
                <div className='flex items-center gap-1'>
                  <AiFillHeart fill='red' /> <span className='text-xs font-semibold text-seconde'>120 lượt thích</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
