import React from 'react'
import { FaCamera } from 'react-icons/fa'
interface Props {
  src: string
  alt: string
  className?: string
  size: number
  status?: boolean
  isEdit?: boolean
}
const Avatar = ({ src, alt, size, className, status, isEdit }: Props) => {
  return (
    <div className={className} style={{ position: 'relative' }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: size || '50px', // Kích thước mặc định là 50px nếu không được xác định
          height: size || '50px', // Kích thước mặc định là 50px nếu không được xác định
          borderRadius: '50%', // Để làm cho ảnh tròn
          objectFit: 'cover'
        }}
      />
      {status && <div className='w-2 h-2 bg-bgGreen rounded-[50%] absolute right-[0.3px] top-[65%]'></div>}
      {isEdit && (
        <div className=''>
          <div className='absolute bg-cloud w-[30px] h-[30px] flex items-center justify-center translate-x-[20%] translate-y-[35%] top-1/2 right-0 rounded-[50%] cursor-pointer'>
            <FaCamera size={16} color={'#a89797'} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Avatar
