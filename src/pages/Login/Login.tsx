import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import Input from 'src/components/Input'
import { rulesSchema, Schema } from 'src/utils/rules'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Schema>({
    resolver: yupResolver(rulesSchema)
  })
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-3 lg:px-4 sm:px-[20%]'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form onSubmit={onSubmit} className='p-10 my-5 rounded bg-white shadow-sm' noValidate autoComplete='off'>
              <div className='text-2xl w-full '>Đăng nhập</div>

              <Input
                name='email'
                className='mt-8'
                type='email'
                placeHolder='Nhập email'
                register={register}
                errrors={errors.email?.message}
              />
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-4'
                errrors={errors.password?.message}
                placeHolder='Nhập mật khẩu'
              />

              <div className='text-center '>
                <button type='submit' className='bg-orange py-2 px-4 text-lg w-full text-white my-5'>
                  Đăng nhập
                </button>
              </div>
              <div className='flex justify-center text-xs gap-2 text-gray-500'>
                <p>Quên mật khẩu ?</p>
                <p>Đăng ký</p>
              </div>
              <p className='text-center text-lg text-gray-400 my-2'>Hoặc</p>
              <div className='flex justify-between gap-3 sm:gap-[6%]'>
                <button className='border py-2 px-5 text-sm w-[47%]'>Facebook</button>
                <button className='border py-2 px-5 text-sm w-[47%]'>Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
