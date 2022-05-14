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
import { TwitterIcon } from '../icons'
import SidebarRow from './SidebarRow'

const Sidebar:React.FC = () => {
  return (
    <div className="flex flex-colgit">
        {/* Logo */}
       <TwitterIcon className="h-10 w-10" />
        {/* SideBarRow Icon */}
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="Explore"/>
        <SidebarRow Icon={BellIcon} title="Notification"/>
        <SidebarRow Icon={MailIcon} title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarRow Icon={CollectionIcon} title="Lists"/>
        <SidebarRow Icon={UserIcon} title="Sign In"/>

        <SidebarRow Icon={DotsCircleHorizontalIcon} title="More"/>
    </div>
  )
}

export default Sidebar