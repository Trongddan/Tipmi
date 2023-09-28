import React from 'react'
import More from 'src/assets/icons/More'
import img from 'src/assets/image/images.jpg'
import Avatar from '../Avatar'
import ImagePostList from '../ImagePostList'
import Like from 'src/assets/icons/Like'
import Comment from 'src/assets/icons/Comment'
import Share from 'src/assets/icons/Share'
export default function Post() {
  const photos = [
    'https://source.unsplash.com/2ShvY8Lf6l0/800x599',

    'https://source.unsplash.com/Dm-qxdynoEc/800x799',

    'https://source.unsplash.com/qDkso9nvCg0/600x799',
    'https://source.unsplash.com/qDkso9nvCg0/600x799',
    'https://source.unsplash.com/qDkso9nvCg0/600x799'
  ]

  return (
    <div className='bg-cloud w-full px-2 py-5 rounded-md my-3  '>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <Avatar size={40} alt={img} src={img} />
          <div>
            <p className='text-sm font-bold'>Đoàn Trọng Đán</p>
            <span className='text-xs'>15 giờ</span>
          </div>
        </div>
        <More />
      </div>
      <div className='content mt-3'>
        <p className='text-[0.95rem] text-[#4b4b4b]'>
          Chúc mừng sinh nhật em bé đáng yêu của mẹ. Tuổi mới cương vị mới học tập tốt và sức khỏe đủ đầy con nhé
        </p>
        <ImagePostList listImg={photos} />
      </div>
      <div className='action-wrapper flex justify-around py-2 '>
        <div className=' text-sm sm:text-base flex items-center gap-2 py-2 px-1 hover:bg-bgside rounded-md cursor-pointer'>
          <Like />
          <p >Thích</p>
        </div>
        <div className='text-sm sm:text-base flex  items-center gap-2 py-2 px-1 hover:bg-bgside rounded-md cursor-pointer'>
          <Comment />
          <p>Bình luận</p>
        </div>
        <div className='text-sm sm:text-base flex  items-center gap-2 py-2 px-1 hover:bg-bgside rounded-md cursor-pointer'>
          <Share />
          <p>Chia sẻ</p>
        </div>
      </div>
    </div>
  )
}
