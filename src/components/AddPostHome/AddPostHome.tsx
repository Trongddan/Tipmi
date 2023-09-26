import React from 'react'
import avt from '../../assets/image/avt.jpg'

// eslint-disable-next-line import/default
import { RiLiveFill } from 'react-icons/ri'
import { AiFillPicture } from 'react-icons/ai'

import { BsFillEmojiSmileFill } from 'react-icons/bs'
import Avatar from '../Avatar'
export default function AddPostHome() {
  return (
    <div className='w-full max-w-7xl'>
      <div className='bg-cloud  rounded-md  h-[120px]'>
        <div className='flex gap-2 px-2 py-3 border-b-[0.3px] border-solid border-[#d2d0d0]'>
          <Avatar size={40} src={avt} alt={avt} />
          <div className='rounded-[20px] h-[40px] px-5 w-[90%] flex items-center bg-bgside'>
            <p>Đán ơi, Bạn đang nghĩ gì?</p>
          </div>
        </div>
        <div className='flex justify-around h-10 mt-2 items-center'>
          <div className='flex justify-between gap-2 p-3 items-center hover:bg-bgside rounded-md'>
            <RiLiveFill size='20' color={'#ee4d2d'} />
            <span>Live video</span>
          </div>
          <div className='flex justify-between gap-2 p-3 items-center hover:bg-bgside rounded-md'>
            <AiFillPicture size='20' color={'#ee4d2d'} />
            <span>Photo/Video</span>
          </div>
          <div className='flex justify-between gap-2 hidden sm:flex p-3 items-center hover:bg-bgside rounded-md'>
            <BsFillEmojiSmileFill size='20' color={'#ee4d2d'} />
            <span>Feeling/Activites</span>
          </div>
        </div>
      </div>
    </div>
  )
}
