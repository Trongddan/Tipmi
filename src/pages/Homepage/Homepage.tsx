import React from 'react'
import AddPostHome from 'src/components/AddPostHome'
import PostList from 'src/components/PostList'

export default function Homepage() {
  return (
    <div className=' bg-bgside py-3 pb-[60px] px-1 overflow-x-hidden w-full overflow-y-scroll custom-scroll  h-[calc(100vh-52px)] '>
      <AddPostHome />
      <PostList />
    </div>
  )
}
