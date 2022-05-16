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
import { signIn, signOut, useSession } from 'next-auth/react'

const Sidebar:React.FC = () => {
  const {data : session} = useSession()
  return (
    <div className="flex flex-col col-span-2 items-center px-4
        md:items-start">
        {/* Logo */}
       <TwitterIcon className="m-3 h-10 w-10" />
        {/* SideBarRow Icon */}
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="Explore"/>
        <SidebarRow Icon={BellIcon} title="Notification"/>
        <SidebarRow Icon={MailIcon} title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarRow Icon={CollectionIcon} title="Lists"/>
        <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session ? 'Sign out' : 'Sign In'}/>

        <SidebarRow Icon={DotsCircleHorizontalIcon} title="More"/>
    </div>
  )
}

export default Sidebar