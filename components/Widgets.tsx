import { SearchCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed'

const Widgets:React.FC = () => {
  return (
    <div className="col-span-2 mt-2 px-2">
        {/* Search */}
        <div className="flex items-center space-x-2 bg-gray-100 
        p-3 rounded-full mt-2">
        <SearchCircleIcon className="h-5 w-5 text-gray-400" />
        <input 
            type="text" 
            placeholder="Search Twitter" 
            className="flex-1 outline-none bg-transparent"
            />
        </div>

        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        options={{height: 1000}}
        />
        {/* <TwitterTimelineEmbed
        sourceType="profile"
        screenName="trump"
        options={{height: 400}}
        /> */}
    </div>
  )
}

export default Widgets