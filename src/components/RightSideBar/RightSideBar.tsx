import React from 'react'
import FriendListOnline from '../FriendListOnline/FriendListOnline'

export default function RightSideBar() {
  return (
    <div className=' fixed right-0 top-[52px] hidden lg:block bg-bgside h-[calc(100vh-52px)] lg:w-[25%] overflow-x-hidden overflow-y-scroll custom-scroll   '>
      <FriendListOnline />
    </div>
  )
}
