/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import { FcPrevious, FcNext } from 'react-icons/fc'

interface Props {
  listImg: string[]
}
export default function ModalPreview({ listImg }: Props) {
  const [openModal, setIsOpenModal] = useState<boolean>(false)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isVisibleButton, setIsVisible] = useState<boolean>(false)
  const handleOpenModal = (index: number) => {
    setIsOpenModal(true)
    setCurrentIndex(index + 1)
  }
  const handleCloseModal = () => {
    setIsOpenModal(false)
  }
  const handleOnLoad = () => {
    setIsVisible(true)
  }
  const handlePre = () => {
    if (currentIndex && currentIndex > 1) {
      setCurrentIndex((pre) => pre && pre - 1)
    }
  }
  const handleNext = () => {
    if (currentIndex && currentIndex < listImg.length) {
      setCurrentIndex((pre) => pre && pre + 1)
    }
  }
  return (
    <>
      <div className='grid grid-cols-2 gap-[2px] my-3 auto-rows-[150px] lg:auto-rows-[200px] auto-cols-fr rounded-md overflow-hidden'>
        {listImg.length == 1 && (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <img
            onClick={() => handleOpenModal(0)}
            className='object-cover h-full col-start-1 col-end-2 row-start-1 row-end-3 imagePost-img-display'
            src={listImg[0]}
            alt=''
          />
        )}
        {listImg.length == 2 &&
          listImg.map((item, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img
              onClick={() => handleOpenModal(index)}
              key={index}
              className='object-cover h-full '
              src={item}
              alt=''
            />
          ))}

        {listImg.length > 2 &&
          listImg.map((item, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img
              onClick={() => handleOpenModal(index)}
              key={index}
              className='object-cover w-full h-full first:row-span-2'
              src={item}
              alt=''
            />
          ))}
      </div>

      {openModal && (
        <div className='fixed top-0 bottom-0 left-0 right-0 bg-bgOverlay z-[1] grid place-items-center'>
          <span onClick={handleCloseModal} className='absolute z-10 cursor-pointer top-4 right-4 '>
            <FaRegTimesCircle color={'#fff'} size={30} />
          </span>

          <div className='relative'>
            {isVisibleButton && (
              <span
                onClick={handlePre}
                className='absolute top-1/2 left-0 lg:translate-x-[-100%] translate-y-[-50%] cursor-pointer'
                style={currentIndex === 1 ? { opacity: '0.3' } : {}}
              >
                <FcPrevious size={50} />
              </span>
            )}
            {listImg && (
              <img
                onLoad={handleOnLoad}
                className='object-contain max-h-[90vh] rounded-md lg:max-w-7xl'
                src={listImg[currentIndex - 1]}
                alt={listImg[currentIndex - 1]}
              />
            )}

            {isVisibleButton && (
              <span
                style={currentIndex === listImg.length ? { opacity: '0.3' } : {}}
                onClick={handleNext}
                className='absolute top-1/2 right-0 translate-y-[-50%] lg:translate-x-[100%]  cursor-pointer'
              >
                <FcNext size={50} />
              </span>
            )}
          </div>
        </div>
      )}
    </>
  )
}
