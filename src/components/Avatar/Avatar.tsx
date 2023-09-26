import React from 'react'
interface Props {
  src: string
  alt: string
  className?: string
  size: number
  status?: boolean,
}
const Avatar = ({ src, alt, size, className, status }: Props) => {
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
    </div>
  )
}

export default Avatar
