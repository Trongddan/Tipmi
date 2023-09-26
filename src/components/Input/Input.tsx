import React from 'react'
import { UseFormRegister, type RegisterOptions } from 'react-hook-form'
interface IInput {
  className?: string
  type: React.HTMLInputTypeAttribute
  name: string
  placeHolder?: string
  register: UseFormRegister<any>
  errrors?: string
}
export default function Input({ errrors, register, type, className, placeHolder, name }: IInput) {
  return (
    <div className={className}>
      <input
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm'
        type={type}
        placeholder={placeHolder}
        {...register(name)}
        autoComplete='off'
      />
      <p className='text-sm mt-1 text-red-500'>{errrors}</p>
    </div>
  )
}
