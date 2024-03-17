"use client"
import Image from "next/image"
import useLockModalScrollHook from "../travelPartModal/hooks/useLockModalScrollHook";
import useCloseModal from "./hooks/useCloseModal";

function Modal({ followingData, followings, followers, status, showModal, modalSetter }: {
    followingData: {
        _count: {
            followings: number;
            followers: number;
        };
    }, followings: [], followers: [], status: "followings" | "followers", showModal: "followings" | "followers" | '', modalSetter: React.Dispatch<React.SetStateAction<"" | "followings" | "followers">>,
}) {
    const isActive = showModal != null

    useLockModalScrollHook(isActive);
    useCloseModal(modalSetter);

    return (
        <div className="min-h-lvh absolute inset-0 flex bg-Night/60 z-50">
            <div className="justify-center ModalCloser flex-col box-border flex items-stretch grow">
                <div className=" justify-center box-border flex pointer-events-none items-start">
                    <div className="overflow-y-visible overflow-x-visible flex-col flex pointer-events-auto relative z-0 outline-none">
                        <div className="justify-center flex items-center z-10 relative">
                            <div className="overflow-x-hidden border-solid border-slate-500 rounded-2xl relative items-stretch border-[0.5px] overflow-y-hidden bg-Night">
                                <div className="w-[520px] min-h-[112px] overflow-x-hidden overflow-y-hidden max-h-[calc(100svh-64px)] flex flex-col justify-center items-center relative">
                                    <div className="header min-h-[60px] w-full overflow-x-hidden top-0 justify-center flex items-center z-10 absolute rounded-t-2xl bg-richBlack">
                                        <div className="grid w-full grid-cols-2 items-center">
                                            <div onClick={() => modalSetter("followers")} className={`${status == "followers" ? "border-b-slate-200 border-b-2" : "border-b-slate-500 border-b-[1px]"} border-solid text-center relative`}>
                                                <div className="p-0 flex flex-col m-0 border-0 h-[60px] justify-center bg-transparent touch-manipulation select-none cursor-pointer outline-none">
                                                    <span className="overflow-x-visible text-center overflow-y-visible min-w-0 text-white text-base break-words relative whitespace-pre-line select-none">Followers</span>
                                                    <span className="overflow-x-visible text-center overflow-y-visible min-w-0 text-white text-xs break-words relative whitespace-pre-line select-none">{followingData?._count?.followers || (followers.length && followers.length)}</span>
                                                </div>
                                            </div>
                                            <div onClick={() => { modalSetter("followings") }} className={`${status == "followings" ? "border-b-slate-200 border-b-2" : "border-b-slate-500 border-b-[1px]"} border-solid text-center relative`}>
                                                <div className="p-0 flex flex-col m-0 border-0 h-[60px] justify-center bg-transparent touch-manipulation select-none cursor-pointer outline-none">
                                                    <span className={`overflow-x-visible text-center overflow-y-visible min-w-0 text-white text-base break-words relative whitespace-pre-line select-none`}>Following</span>
                                                    <span className="overflow-x-visible text-center overflow-y-visible min-w-0 text-white text-xs break-words relative whitespace-pre-line select-none">{followingData?._count?.followings || followings?.length && followings.length}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main pb-1 w-full h-full overflow-x-hidden overflow-y-auto overscroll-y-contain flex flex-col relative z-0">
                                        <div className="flex flex-col relative grow last:mb-4">
                                            <div className="min-h-[60px] spacerForHeader">
                                            </div>
                                            {status == "followers" &&
                                                followers?.map((follower: { follower: { email: string, username: string, profileImg: string } }) => {
                                                    return (
                                                        <div className="pt-4 flex cursor-pointer pl-4 pointer-events-auto" >
                                                            <div className="imgContainer h-fit pt-1 pb-[2px] pr-3 relative cursor-pointer">
                                                                <div className="size-9 rounded-full">
                                                                    <Image src={follower.follower.profileImg}
                                                                        alt="profileImage"
                                                                        width={36}
                                                                        height={36}
                                                                        className="object-cover rounded-full ring-offset-1 outline-[0.5px] aspect-square overflow-clip"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="infoContainer min-w-0 border-b-slate-500 border-solid border-b-[0.5px] flex flex-col pr-4 grow cursor-pointer">
                                                                <div className=" pb-4 flex items-center justify-between grow">
                                                                    <div className=" min-w-0 h-11 justify-center flex flex-col pr-2">
                                                                        <div className="flex items-center">
                                                                            <span className="flex items-center p-0 m-0 text-white">
                                                                                <a href="" className="">
                                                                                    <span className="whitespace-pre-line text-base font-semibold text-left overflow-y-visible overflow-x-visible max-w-full">
                                                                                        {follower.follower.email}
                                                                                    </span>
                                                                                </a>
                                                                            </span>
                                                                        </div>
                                                                        {follower.follower?.username &&
                                                                            <div className="flex items-center">
                                                                                <span className="overflow-y-visible text-sm overflow-x-visible min-w-0 max-w-full">follower.follower?.username</span>
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                    <div className="flwButton min-w-[104px] h-[34px] border-[1px] border-solid border-slate-500 max-w-full whitespace-nowrap text-white rounded-lg justify-center shrink-0 cursor-pointer text-sm font-semibold z-0 relative px-1 items-center inline-flex">
                                                                        Follow
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                )
                                            }

                                            {status == "followings" &&
                                                followings?.map((followed_user: { followed_user: { email: string, username: string, profileImg: string } }) => {
                                                    return (
                                                        <div className="pt-4 flex cursor-pointer pl-4 pointer-events-auto" >
                                                            <div className="imgContainer h-fit pt-1 pb-[2px] pr-3 relative cursor-pointer">
                                                                <div className="size-9 rounded-full">
                                                                    <Image src={followed_user?.followed_user?.profileImg}
                                                                        alt="profileImage"
                                                                        width={36}
                                                                        height={36}
                                                                        className="object-cover rounded-full ring-offset-1 outline-[0.5px] aspect-square overflow-clip"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="infoContainer min-w-0 border-b-slate-500 border-solid border-b-[0.5px] flex flex-col pr-4 grow cursor-pointer">
                                                                <div className=" pb-4 flex items-center justify-between grow">
                                                                    <div className=" min-w-0 h-11 justify-center flex flex-col pr-2">
                                                                        <div className="flex items-center">
                                                                            <span className="flex items-center p-0 m-0 text-white">
                                                                                <a href="" className="">
                                                                                    <span className="whitespace-pre-line text-base font-semibold text-left overflow-y-visible overflow-x-visible max-w-full">
                                                                                        {followed_user?.followed_user?.email}
                                                                                    </span>
                                                                                </a>
                                                                            </span>
                                                                        </div>
                                                                        {followed_user.followed_user?.username &&
                                                                            <div className="flex items-center">
                                                                                <span className="overflow-y-visible text-sm overflow-x-visible min-w-0 max-w-full">follower.follower?.username</span>
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                    <div className="flwButton min-w-[104px] h-[34px] border-[1px] border-solid border-slate-500 max-w-full whitespace-nowrap text-white rounded-lg justify-center shrink-0 cursor-pointer text-sm font-semibold z-0 relative px-1 items-center inline-flex">
                                                                        Follow
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default Modal

function setState(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}
