import React, { useState } from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import { FcPrevious, FcNext } from 'react-icons/fc'

interface Props {
  listImg: string[]
}
export default function ModalPreview({listImg }: Props) {
  const [openModal, setIsOpenModal] = useState<boolean>(false)
  const [currentIndex, setCurrentIndex] = useState<number>()
  const [isVisibleButton, setIsVisible] = useState<boolean>(false)
  const handleOpenModal = (index: number) => {
    setIsOpenModal(true)
    setCurrentIndex(index)
  }
  const handleCloseModal = () => {
    setIsOpenModal(false)
  }
  const handleOnLoad = () => {
    setIsVisible(true)
  }
  const handlePre = () => {
    console.log(listImg[0])
    if (currentIndex && currentIndex > 0) {
      setCurrentIndex((pre) => pre && pre - 1)
    }
  }
  const handleNext = () => {
    if (currentIndex && currentIndex < listImg.length-1) {
      setCurrentIndex((pre) => pre && pre + 1)
    }
  }
  return (
    <>
      <div className='grid grid-cols-2 gap-[2px] my-3 auto-rows-[150px] lg:auto-rows-[200px] auto-cols-fr rounded-md overflow-hidden'>
        {listImg.length == 1 && (
          <img
            onClick={() => handleOpenModal(0)}
            className='object-cover h-full col-start-1 col-end-2 row-start-1 row-end-3 imagePost-img-display'
            src={listImg[0]}
            alt=''
          />
        )}
        {listImg.length == 2 &&
          listImg.map((item, index) => (
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
          <span onClick={handleCloseModal} className='absolute z-10 cursor-pointer top-4 right-4'>
            <FaRegTimesCircle color={'#fff'} size={30} />
          </span>
          {currentIndex && (
            <div className='relative'>
              {isVisibleButton && (
                <span onClick={handlePre} className='absolute top-1/2 left-[1vw] translate-y-[-50%]'>
                  <FcPrevious size={40} />
                </span>
              )}
              <img
                onLoad={handleOnLoad}
                className='object-contain max-h-[90vh] rounded-md lg:max-w-7xl'
                src={listImg[currentIndex]}
                alt={listImg[currentIndex]}
              />
              {isVisibleButton && (
                <span onClick={handleNext} className='absolute top-1/2 right-[1vw] translate-y-[-50%]'>
                  <FcNext size={40} />
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}
