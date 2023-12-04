import React from 'react'
import { Popover, ArrowContainer, PopoverPosition } from 'react-tiny-popover'
interface Props {
  isPopoverOpen: boolean
  position?: PopoverPosition[]
  onClickOutside: () => void
  contentPop: React.ReactElement
  children: React.ReactElement,
  colorArr?:string
}
export default function PopoverComponent({ isPopoverOpen, onClickOutside, position, children, contentPop,colorArr='#fff' }: Props) {
  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={position}
      padding={10}
      onClickOutside={onClickOutside}
      //ref={clickMeButtonRef} // if you'd like a ref to your popover's child, you can grab one here
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={colorArr}
          arrowSize={10}
          arrowStyle={{ opacity: 1 }}
          className='popover-arrow-container'
          arrowClassName='popover-arrow'
        >
          {contentPop}
        </ArrowContainer>
      )}
    >
      {children}
    </Popover>
  )
}
