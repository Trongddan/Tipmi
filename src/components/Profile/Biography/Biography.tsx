import * as React from 'react'
import { AiFillHome } from 'react-icons/ai'
import {FaLocationDot} from "react-icons/fa6"
import {IoIosWifi} from 'react-icons/io'
export interface Props {}

export default function BioGraphyComponent({}: Props) {
  return (
    <div className='w-full p-3 mt-3 rounded-md shadow-md bg-cloud'>
      <p className='text-base font-semibold'>Giới thiệu</p>
      <ul className='flex flex-col gap-3 py-2 lg:grid lg:grid-cols-2 lg:gap-3'>
        <li className='flex items-center gap-3 lg:gap-2'>
          <AiFillHome size={20} color={'#b9b9b9'} />
          <p>
            Sống tại <span className='font-semibold '>Nam Định,Nam trực</span>
          </p>
        </li>
        <li className='flex items-center gap-3'>
          <FaLocationDot size={20} color={'#b9b9b9'} />
          <p>
            Đến từ <span className='font-semibold '>Nam Trực</span>
          </p>
        </li>
        <li className='flex items-center gap-3'>
          <IoIosWifi size={20} color={'#b9b9b9'} />
          <p>
            Có 105 người theo dõi
          </p>
        </li>
        <li className='flex items-center gap-3'>
          <IoIosWifi size={20} color={'#b9b9b9'} />
          <p>
            Sống tại <span className='font-semibold '>Nam Định</span>
          </p>
        </li>
      </ul>
    </div>
  )
}
