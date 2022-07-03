import React from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import Avatar from "./Avatar";
import TimeAgo from "react-timeago";
import Link from "next/link";
import {Jelly} from '@uiball/loaders'

type Props = {
  post: Post;
};

function Post({ post }: Props) {

  if(!post) return (
    <div className='flex w-full items-center justify-center p-10 text-xl'>
      <Jelly size={50} color="#ff4501"/>
    </div>
  )


  return (
    <Link href={`/post/${post.id}`}>
    <div className="flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600">
      {/* votes */}
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon className="voteButtons hover:text-red-400" />
        <p className="text-xs font-bold text-black">0</p>
        <ArrowDownIcon className="voteButtons hover:text-blue-400" />
      </div>

      <div className="p-3 pb-1 ">
        {/* header */}
        <div className="flex itmes-center space-x-2">
          <Avatar seed={post.subreddit[0]?.topic} />
          <p className="text-xs text-gray-400 ">
          <Link href={`/subreddit/${post.subreddit[0]?.topic}`}>
            <span className="font-bold text-black hover:text-blue-400 hover:underline">
              r/{post.subreddit[0]?.topic}
            </span>
          </Link>
            || posted by u/
            {post.username} <TimeAgo date={post.created_at} />
          </p>
        </div>
        {/* body */}
        <div className="py-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2 text-sm font-light">{post.body}</p>
        </div>

        {/* image */}
        <img className="w-full" src={post.image} alt="" />

        {/* footer */}
        <div className="flex space-x-4 text-gray-400">
          <div className="postButtons">
            <ChatAltIcon className="h-6 w-6" />
            <p className="">{post.comments.length} Comments</p>
          </div>

          <div className="postButtons">
            <GiftIcon className="h-6 w-6" />
            <p className="hidden sm:inline">{post.comments.length} Award</p>
          </div>
          <div className="postButtons">
            <ShareIcon className="h-6 w-6" />
            <p className="hidden sm:inline">{post.comments.length} Share</p>
          </div>

          <div className="postButtons">
            <BookmarkIcon className="h-6 w-6" />
            <p className="hidden sm:inline">{post.comments.length} Save</p>
          </div>

          <div className="postButtons">
            <DotsHorizontalIcon className="h-6 w-6" />
            {/* <p className="hidden sm:inline">{post.comments.length} Comments</p> */}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Post;
