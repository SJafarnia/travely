"use client"
import Image from "next/image"
import { useState } from "react"
import FeedLikeButton from "./FeedLikeButton"

function FeedPost({ username, id, title, likes, profileImg, img }: { username: string, id: string, title: string, likes: number, profileImg: string, img: string }) {
    let [likesCount, setLikesCount] = useState<number>(likes)

    return (
        <article>
            <div className="py-5 md:mx-auto md:max-w-[470px] md:min-w-[390px] pb-4 mb-5 border-b border-[#262626]">
                <div className="pb-3 pl-1">
                    <div className="flex items-center justify-start">
                        <div className="mr-3">
                            <Image src={profileImg} alt="profilePic" width={32} height={32} className="w-[32px] h-[32px] rounded-full" />
                        </div>
                    </div>
                </div>
                <div className="h-auto w-svw md:max-w-[470px] border rounded-[4px] border-solid border-[#262626]">
                    <Image alt="post" src={img} height={1000} width={1000} className="w-full h-auto rounded-[4px]" />
                </div>
                <div className="px-4">
                    <div className="h-full text-white">
                        <section className="my-1 grid items-center grid-cols-1 grid-cols-1-1">
                            <div className="flex">
                                <FeedLikeButton travelId={id} setLikesCount={setLikesCount} />
                            </div>
                            {/* TODO: add bookmark feature after prod */}
                            {/* <div className="ml-auto mr-0">
                                <div className="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                </div>
                            </div> */}
                        </section>
                        <section>
                            <div className="text-sm">
                                <span>{likesCount} likes</span>
                            </div>
                        </section>
                        <div className="comments mt-2">
                            <span className="mr-1 font-semibold text-sm">{username}</span>
                            <span>
                                {title}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default FeedPost