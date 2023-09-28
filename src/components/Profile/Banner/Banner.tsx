import * as React from 'react'
import Avatar from 'src/components/Avatar'
import { AiOutlinePlus } from 'react-icons/ai'
import Button from 'src/components/ShareComponent/Button'
export interface Props {
  style?: React.CSSProperties
  className?: string
  avt: string
  bg: string
}

export default function BannerComponent({ avt, bg, className, style }: Props) {
  return (
    <div
      style={{ backgroundImage: `url(${avt})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
      className={
        className
          ? `${className} w-full h-[20vh] rounded-md shadow-xl relative`
          : 'w-full h-[20vh] rounded-md shadow-xl relative'
      }
    >
      <Avatar
        className='absolute top-[40%] left-3 w-fit rounded-[50%] border-cloud border-2 '
        size={80}
        alt=''
        src={bg}
        isEdit
      />
      <Button title='Thêm bạn bè' className='absolute text-white top-4 right-4' icon={<AiOutlinePlus/>} ></Button>

    </div>
  )
}
