import React from 'react'
import ModalPreview from '../ShareComponent/ModalPreview'
interface Props {
  listImg: string[]
}
export default function ImagePostList({ listImg }: Props) {
  return <ModalPreview listImg={listImg} />
}
;<style></style>
