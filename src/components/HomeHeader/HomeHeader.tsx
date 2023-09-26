/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar'
import avt from '../../assets/image/images.jpg'
import { BiMessageDetail } from 'react-icons/bi'
import Popover from '../Popover'
import { FiLogIn } from 'react-icons/fi'
import { BiLogOut } from 'react-icons/bi'
import { AiOutlineSetting, AiOutlineProfile } from 'react-icons/ai'
export default function HomeHeader() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const handleOpenPopover = () => {
    setIsPopoverOpen(!isPopoverOpen)
  }
  const PopoverContent = () => (
    <div className='bg-cloud w-[50vw] shadow-xl sm:w-[250px] py-2 rounded-md'>
      <ul>
        <li className='flex gap-2 items-center my-2 mx-3 text-sm sm:text-base cursor-pointer'>
          <AiOutlineProfile color='ee4d2d' size={20} />
          <p>Trang cá nhân</p>
        </li>
        <li className='flex gap-2 items-center my-2 mx-3 text-sm sm:text-base cursor-pointer'>
          <AiOutlineSetting color='ee4d2d' size={20} />
          <p>Cài đặt</p>
        </li>
        <li className='flex gap-2 items-center my-2 mx-3 text-sm sm:text-base cursor-pointer'>
          <BiLogOut color='ee4d2d' size={20} />
          <p>Đăng xuất</p>
        </li>
      </ul>
    </div>
  )

  return (
    <header className='h-[52px] flex items-center'>
      <div className='w-full mx-auto px-4 flex justify-between'>
        <nav className='flex items-center'>
          <Link to='/'>
            <svg width='40' height='40' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M22.7915 45.7915C10.2198 45.7915 0 35.5509 0 23C0 10.4282 10.2198 0.208469 22.7915 0.208469C35.3633 0.208469 45.5831 10.4282 45.5831 23C45.5622 35.5509 35.3425 45.7915 22.7915 45.7915ZM22.7915 3.49711C12.0514 3.49711 3.28864 12.2391 3.28864 23C3.28864 33.7609 12.0306 42.5029 22.7915 42.5029C33.5316 42.5029 42.2944 33.7609 42.2944 23C42.2736 12.2391 33.5316 3.49711 22.7915 3.49711Z'
                fill='#ee4d2d'
              />
              <path d='M43.9179 42.5029H23.6033V45.7915H43.9179V42.5029Z' fill='#ee4d2d' />
              <path
                d='M16.9844 16.4643V22.9792V29.494C16.9844 31.2008 18.5038 31.742 20.3771 30.7221L31.0756 24.8316C32.9489 23.8118 32.9489 22.1258 31.0756 21.1059L20.3771 15.2363C18.5038 14.2164 16.9844 14.7576 16.9844 16.4643Z'
                fill='#ee4d2d'
              />
              <path
                d='M22.7914 37.9238C14.5698 37.9238 7.86768 31.2216 7.86768 23C7.86768 14.7576 14.5698 8.07623 22.7914 8.07623C31.0339 8.07623 37.7152 14.7784 37.7152 23C37.7152 31.2216 31.0131 37.9238 22.7914 37.9238ZM22.7914 11.5314C16.4639 11.5314 11.3228 16.6725 11.3228 23C11.3228 29.3275 16.4639 34.4686 22.7914 34.4686C29.119 34.4686 34.2601 29.3275 34.2601 23C34.2393 16.6725 29.0981 11.5314 22.7914 11.5314Z'
                fill='#ee4d2d'
              />
            </svg>
          </Link>
          <div className='ml-5 text-xl lg:text-2xl font-extrabold text-orange'>Tipmi</div>
        </nav>
        <div>
          <ul className='flex gap-5 h-full items-center'>
            <li className='cursor-pointer'>
              <BiMessageDetail size={25} color='#ee4d2d' />
            </li>
            <Popover
              position={['bottom']}
              isPopoverOpen={isPopoverOpen}
              onClickOutside={() => setIsPopoverOpen(false)}
              contentPop={PopoverContent()}
            >
              <li onClick={handleOpenPopover} className='cursor-pointer'>
                <Avatar size={35} src={avt} alt='' />
              </li>
            </Popover>
            <li className='cursor-pointer '>
              <Link className='flex items-center gap-2' to={'/login'}>
                Đăng nhập
                <FiLogIn size={25} color='#ee4d2d' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
