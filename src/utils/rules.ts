import { RegisterOptions } from 'react-hook-form'

import * as yup from 'yup'
export const rulesSchema = yup.object({
  email: yup.string().required('Email là bắt buộc').email('Email chưa đúng'),
  password: yup
    .string()
    .required('Mật khẩu là bắt buộc')
    .min(5, 'Độ dài từ 5-15 ký tự')
    .max(15, 'Độ dài từ 5-15 ký tự'),
  confirm_password: yup
    .string()
    .required('Mật khẩu là bắt buộc')
    .min(5, 'Độ dài từ 5-15 ký tự')
    .max(15, 'Độ dài từ 5-15 ký tự')
    .oneOf([yup.ref('password')], 'Mật khẩu không khớp')
})
export type Schema = yup.InferType<typeof rulesSchema>
