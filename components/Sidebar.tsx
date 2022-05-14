import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon    

} from '@heroicons/react/outline'
import { images } from '../public'
import { TwitterIcon } from '../icons'

const Sidebar:React.FC = () => {
  return (
    <div>
       <TwitterIcon className="h-10 w-10" />
    </div>
  )
}

export default Sidebar