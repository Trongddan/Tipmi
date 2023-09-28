import * as React from 'react'
import avt from '../../assets/image/images.jpg'
import bg from '../../assets/image/avt.jpg'
import BannerComponent from 'src/components/Profile/Banner'
import BioGraphyComponent from 'src/components/Profile/Biography'
import { Link } from 'react-router-dom'
import { BsFillPostcardFill, BsImages } from 'react-icons/bs'
import { FaUserFriends } from 'react-icons/fa'
import PostList from 'src/components/PostList'

export interface IProfileProps {}

export default function Profile() {
  return (
    <div className='px-2 py-3 bg-bgside'>
      <BannerComponent avt={avt} bg={bg} />
      <BioGraphyComponent />
      <div className='my-3 content bg-cloud rounded-t-md shadow-md'>
        <div className='flex items-center justify-around h-[50px] border-b-2 '>
          <Link
            to={''}
            className={`flex items-center h-[50px] gap-2 hover:border-b-2 text-[#b9b9b9] hover:border-solid hover:border-orange hover:text-orange min-w-[100px] justify-center`}
          >
            <BsFillPostcardFill size={21} />
            Bài viết
          </Link>
          <Link
            to={''}
            className={`flex items-center h-[50px] gap-2 hover:border-b-2 text-[#b9b9b9] hover:border-solid hover:border-orange hover:text-orange min-w-[100px] justify-center`}
          >
            <BsImages size={20} />
            Ảnh
          </Link>
          <Link
            to={''}
            className={`flex items-center h-[50px] gap-2 hover:border-b-2 text-[#b9b9b9] hover:border-solid hover:border-orange hover:text-orange min-w-[100px] justify-center`}
          >
            <FaUserFriends size={22} />
            Bạn bè
          </Link>
        </div>
      </div>
        <PostList />
    </div>
  )
}
