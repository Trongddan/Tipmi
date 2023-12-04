/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import Avatar from '../Avatar'
import avt from '../../assets/image/images.jpg'
import { GrEmoji } from 'react-icons/gr'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import PopoverComponent from '../Popover/Popover'
import { FiSend } from 'react-icons/fi'
import CommentItem from './CommentItem'
export default function CommentList() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [contentComment, setContentComment] = useState<string>('')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectEmoji = (emoji: any) => {
    setContentComment((pre) => pre.concat(emoji.native))
  }

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentComment(e.target.value)
  }
  return (
    <div>
      <p className='text-[#b9b9b9] my-3'>Xem thêm bình luận</p>
      <div className='flex flex-col gap-4 max-h-[60vh] overflow-y-scroll overflow-x-hidden custom-scroll'>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
      <div className='flex justify-around gap-3 my-3 py-2'>
        <div className='w-[40px]'>
          <Avatar size={40} src={avt} alt='' />
        </div>
        <div className='w-[calc(100%-40px)] flex gap-2 flex-col'>
          <PopoverComponent
            contentPop={
              <>
                <Picker
                  perLine={8}
                  onEmojiSelect={handleSelectEmoji}
                  icon='solid'
                  p
                  theme='dark'
                  data={data}
                  frequentlyUsed={['smile', 'heart', 'thumbsup']}
                />
              </>
            }
            isPopoverOpen={isOpen}
            onClickOutside={() => setIsOpen(false)}
            colorArr='#151157'
          >
            <span onClick={() => setIsOpen(!isOpen)} className='my-2 w-fit cursor-pointer'>
              <GrEmoji size={20} />
            </span>
          </PopoverComponent>

          <div className='flex gap-3 cursor-pointer'>
            <textarea
              value={contentComment}
              onChange={(e) => handleChangeContent(e)}
              placeholder='Vui lòng để lại bình luận'
              className='w-full lg:min-h-[100px]  border-solid border-[1.4px] rounded-md outline-none px-3 py-2 bg-bgside text-seconde'
            ></textarea>
            <span>
              <FiSend size={20} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
