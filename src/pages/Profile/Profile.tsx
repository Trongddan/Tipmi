import * as React from 'react'
import Avatar from 'src/components/Avatar'
import avt from '../../assets/image/images.jpg'
import bg from '../../assets/image/avt.jpg'
import BannerComponent from 'src/components/Profile/Banner'
export interface IProfileProps {}

export default function Profile(props: IProfileProps) {
  return (
    <div className='px-2 py-3 bg-cloud'>
      <BannerComponent avt={avt} bg={bg} />
    </div>
    
  )
}
