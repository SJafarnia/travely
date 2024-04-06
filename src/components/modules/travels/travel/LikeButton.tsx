"use client"
import { useEffect, useLayoutEffect, useState } from 'react'
import { likeTravel, unlikeTravel } from './_actions/like'
import { deslugify } from '@/lib/utils/textModifiers'

function LikeButton({ travelId, likes }: { travelId: string, likes: number }) {
    const [liked, setLiked] = useState<boolean | null>(null)
    let [likesCount, setLikesCount] = useState(likes)

    const likeHandler = () => {
        if (liked == false) {
            const isLiked = likeTravel(travelId);
            if (isLiked) {
                setLiked(true);
                setLikesCount((prev) => prev + 1);
            }
        }
    }

    const unlikeHandler = () => {
        if (liked == true) {
            const isUnliked = unlikeTravel(travelId)
            if (isUnliked) {
                setLiked(false);
                setLikesCount((prev) => prev - 1);
            }
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res: { liked: boolean } = await fetch("/api/userdata/liked", {
                method: "POST",
                cache: "no-cache",
                body: JSON.stringify({ travelId: deslugify(travelId) })
            }).then(res => res.json())

            setLiked(res.liked);
        }

        fetchData()
    }, [])

    return (
        <div className='flex gap-1 z-50'>
            <div className=''>{likesCount > 0 && likesCount}</div>
            <div className='flex cursor-pointer flex-wrap content-center justify-center'>
                {liked == false && (
                    <svg
                        onDoubleClick={likeHandler}
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-5 w-5'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                        />
                    </svg>
                )}

                {liked == true && (
                    <svg
                        onDoubleClick={unlikeHandler}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='h-5 w-5 text-red-700'
                    >
                        <path d='m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z' />
                    </svg>
                )}
            </div>
        </div>
    )
}

export default LikeButton