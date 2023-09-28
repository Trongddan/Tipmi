import React from 'react'
import ModalPreview from '../ShareComponent/ModalPreview'
interface Props {
  listImg: string[]
}
export default function ImagePostList({ listImg }: Props) {
  return (
    <ModalPreview>
    <div className='grid grid-cols-2 gap-[2px] my-3 auto-rows-[150px] lg:auto-rows-[200px] auto-cols-fr rounded-md overflow-hidden'>
      {listImg.length == 1 && (
        <img
          className='col-start-1 col-end-2 row-start-1 row-end-3 h-full object-cover imagePost-img-display'
          src={listImg[0]}
          alt=''
        />
      )}
      {listImg.length == 2 &&
        listImg.map((item, index) => <img key={index} className=' h-full object-cover' src={item} alt='' />)}
      
        {listImg.length > 2 &&
          listImg.map((item, index) => (
            <img key={index} className='first:row-span-2 h-full w-full object-cover' src={item} alt='' />
          ))}
    </div>
      </ModalPreview>
  )
}
;<style></style>
