// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity';
import { Comment } from '../../typing';

const commentQuery = groq`
*[_type == "comment" && references(*[_type=='tweet']._id)]{
    _id,
    ...
} | order(_createAt desc)
` 

type Data = Comment[];

export default async function handler(  
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {tweetId} = req.query

    const comments : Comment[] = await sanityClient.fetch(commentQuery,{
        tweetId,
    })
     
    console.log("Comment>>>>>>" + comments)

  res.status(200).json(comments)
}
