import * as React from 'react'
import { IconType } from 'react-icons'

export interface Props {
  title: string
  icon?: React.ReactElement
  onClick?: () => void
  className?: string
}

export default function Button({ onClick, title, className, icon }: Props) {
  return (
    <div
      className={
        className
          ? ` p-2 bg-orange flex w-fit rounded-md gap-1 cursor-pointer hover:opacity-80 ${className} `
          : `p-2 bg-orange flex w-fit rounded-md items-center gap-1 cursor-pointer hover:opacity-80 `
      }
    >
      {icon}
      <p>{title}</p>
    </div>
  )
}
