import { RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Tweet } from '../typing';
import TweetBox from './TweetBox'
import TweetComponent from './Tweet'
import { fetchTweets } from '../utils/fetchTweets';
import toast from 'react-hot-toast';
interface PropTypes {
  tweets : Tweet[];
}

const Feed:React.FC<PropTypes> = ({tweets : tweetsProp}) => {
  //STATE
  const [tweets,setTweets] = useState<Tweet[]>(tweetsProp)
  //Handle
  const handleRefesh = async () => {
    const refeshToast = toast.loading('Refeshing ...')
    const tweets = await fetchTweets();
    setTweets(tweets)

    toast.success('Feed Updated!',{
      id : refeshToast,
      
    })

  }
  return (
    <div className="col-span-7 lg:col-span-5 border-x max-h-screen 
    overflow-scroll scrollbar-hide">
        <div className="flex items-center justify-between">
            <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
            <RefreshIcon  
            onClick = {handleRefesh}
            className="h-8 w-8 cursor-pointer text-twitter
            mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180
            active:scale-125"/>
        </div>
        {/* Tweetbox */}
        <div>
        <TweetBox setTweets={setTweets}/>
        </div>

        {/* Feed */}
        <div>
          {tweets.map(tweet =>(
            <TweetComponent 
              key={tweet._id} 
              tweet={tweet}
              />
          ))}
        </div>

    </div>
  )
}

export default Feed