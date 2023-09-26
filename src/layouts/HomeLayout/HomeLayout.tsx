import React from 'react'
import FooterMobile from 'src/components/FooterMobile'
import HomeHeader from 'src/components/HomeHeader'
import LeftSideBar from 'src/components/LeftSideBar'
import RightSideBar from 'src/components/RightSideBar'
interface Props {
  children: React.ReactNode
}
export default function HomeLayout({ children }: Props) {
  return (
    <>
      <HomeHeader />
      <div className='flex justify-center bg-bgside '>
        <div className='max-w-[600px] lg:w-[50%] w-full flex justify-center'>
          <LeftSideBar />
          <div className='w-full'>{children}</div>
          <RightSideBar />
        </div>
      </div>
      <FooterMobile className='sm:hidden h-[70px]' />
    </>
  )
}
