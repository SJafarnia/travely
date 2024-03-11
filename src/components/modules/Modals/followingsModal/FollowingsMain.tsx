'use client'

import { useState } from "react"

function FollowingsMain() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const active = true;

    return (
        <div className='flex w-full justify-around gap-8'>
            <button onClick={() => setShowModal(true)} className='mt-2 w-full rounded-md border border-creamWhite/30 bg-jet/40 p-2 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:border-creamWhite/80 hover:bg-jet/70'>
                Followings
            </button>
            <button className='mt-2 w-full rounded-md border border-creamWhite/30 bg-jet/40 p-2 text-sm text-white transition-all duration-150 ease-in-out hover:border-creamWhite/80 hover:bg-jet/70'>
                Followers
            </button>
            {showModal &&
                <div className="min-h-lvh absolute inset-0 flex bg-Night/60 z-50">
                    <div className="justify-center flex-col box-border flex items-stretch grow">
                        <div className=" justify-center box-border flex pointer-events-none items-start">
                            <div className="overflow-y-visible overflow-x-visible flex-col flex pointer-events-auto relative z-0 outline-none">
                                <div className="justify-center flex items-center z-10 relative">
                                    <div className="overflow-x-hidden border-solid border-slate-500 rounded-2xl relative items-stretch border-[0.5px] overflow-y-hidden bg-Night">
                                        <div className="w-[520px] min-h-[112px] overflow-x-hidden overflow-y-hidden max-h-[calc(100svh-64px)] flex flex-col justify-center items-center relative">
                                            <div className="header min-h-[60px] w-full overflow-x-hidden top-0 justify-center flex items-center z-10 absolute rounded-t-2xl bg-richBlack">
                                                <div className="grid w-full grid-cols-2 items-center">
                                                    <div className=" border-b-[1px] border-solid border-b-slate-500 text-center relative">
                                                        <div className="p-0 flex flex-col m-0 border-0 h-[60px] justify-center bg-transparent touch-manipulation select-none cursor-pointer outline-none">
                                                            <span className="overflow-x-visible text-center overflow-y-visible min-w-0 text-white text-base break-words relative whitespace-pre-line select-none">Followers</span>
                                                            <span className="overflow-x-visible text-center overflow-y-visible min-w-0 text-white text-xs break-words relative whitespace-pre-line select-none">32</span>
                                                        </div>
                                                    </div>
                                                    <div className={`${active ? "border-b-slate-200 border-b-2" : "border-b-slate-500 border-b-[1px]"} border-solid text-center relative`}>
                                                        <div className="p-0 flex flex-col m-0 border-0 h-[60px] justify-center bg-transparent touch-manipulation select-none cursor-pointer outline-none">
                                                            <span className={`overflow-x-visible text-center overflow-y-visible min-w-0 text-white text-base break-words relative whitespace-pre-line select-none`}>Following</span>
                                                            <span className="overflow-x-visible text-center overflow-y-visible min-w-0 text-white text-xs break-words relative whitespace-pre-line select-none">122</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="main pb-1 w-full h-full overflow-x-hidden overflow-y-auto overscroll-y-contain flex flex-col relative z-0">
                                                <div className="flex flex-col relative grow">
                                                    <div className="min-h-[60px] spacerForHeader">
                                                    </div>
                                                    <div className="pt-4 flex cursor-pointer pl-4 pointer-events-auto">
                                                        <div className="imgContainer h-fit pt-1 pb-[2px] pr-3 relative cursor-pointer">
                                                            <div className="size-9 rounded-full">
                                                                <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                                                                    className=" object-cover rounded-full ring-offset-1 outline-[0.5px] aspect-square overflow-clip" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="infoContainer min-w-0 border-b-slate-500 border-solid border-b-[0.5px] flex flex-col pr-4 grow cursor-pointer">
                                                            <div className=" pb-4 flex items-center justify-between grow">
                                                                <div className=" min-w-0 h-11 justify-center flex flex-col pr-2">
                                                                    <div className="flex items-center">
                                                                        <span className="flex items-center p-0 m-0 text-white">
                                                                            <a href="" className="">
                                                                                <span className="whitespace-pre-line text-base font-semibold text-left overflow-y-visible overflow-x-visible max-w-full">
                                                                                    ssadasxc
                                                                                </span>
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <span className="overflow-y-visible text-sm overflow-x-visible min-w-0 max-w-full">name</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flwButton min-w-[104px] h-[34px] border-[1px] border-solid border-slate-500 max-w-full whitespace-nowrap text-white rounded-lg justify-center shrink-0 cursor-pointer text-sm font-semibold z-0 relative px-1 items-center inline-flex">
                                                                    Follow
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pt-4 flex cursor-pointer pl-4 pointer-events-auto">
                                                        <div className="imgContainer h-fit pt-1 pb-[2px] pr-3 relative cursor-pointer">
                                                            <div className="size-9 rounded-full">
                                                                <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                                                                    className=" object-cover rounded-full ring-offset-1 outline-[0.5px] aspect-square overflow-clip" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="infoContainer min-w-0 border-b-slate-500 border-solid border-b-[0.5px] flex flex-col pr-4 grow cursor-pointer">
                                                            <div className=" pb-4 flex items-center justify-between grow">
                                                                <div className=" min-w-0 h-11 justify-center flex flex-col pr-2">
                                                                    <div className="flex items-center">
                                                                        <span className="flex items-center p-0 m-0 text-white">
                                                                            <a href="" className="">
                                                                                <span className="whitespace-pre-line text-base font-semibold text-left overflow-y-visible overflow-x-visible max-w-full">
                                                                                    ssadasxc
                                                                                </span>
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <span className="overflow-y-visible text-sm overflow-x-visible min-w-0 max-w-full">name</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flwButton min-w-[104px] h-[34px] border-[1px] border-solid border-slate-500 max-w-full whitespace-nowrap text-white rounded-lg justify-center shrink-0 cursor-pointer text-sm font-semibold z-0 relative px-1 items-center inline-flex">
                                                                    Follow
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pt-4 flex cursor-pointer pl-4 pointer-events-auto">
                                                        <div className="imgContainer h-fit pt-1 pb-[2px] pr-3 relative cursor-pointer">
                                                            <div className="size-9 rounded-full">
                                                                <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                                                                    className=" object-cover rounded-full ring-offset-1 outline-[0.5px] aspect-square overflow-clip" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="infoContainer min-w-0 border-b-slate-500 border-solid border-b-[0.5px] flex flex-col pr-4 grow cursor-pointer">
                                                            <div className=" pb-4 flex items-center justify-between grow">
                                                                <div className=" min-w-0 h-11 justify-center flex flex-col pr-2">
                                                                    <div className="flex items-center">
                                                                        <span className="flex items-center p-0 m-0 text-white">
                                                                            <a href="" className="">
                                                                                <span className="whitespace-pre-line text-base font-semibold text-left overflow-y-visible overflow-x-visible max-w-full">
                                                                                    ssadasxc
                                                                                </span>
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <span className="overflow-y-visible text-sm overflow-x-visible min-w-0 max-w-full">name</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flwButton min-w-[104px] h-[34px] border-[1px] border-solid border-slate-500 max-w-full whitespace-nowrap text-white rounded-lg justify-center shrink-0 cursor-pointer text-sm font-semibold z-0 relative px-1 items-center inline-flex">
                                                                    Follow
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pt-4 flex cursor-pointer pl-4 pointer-events-auto">
                                                        <div className="imgContainer h-fit pt-1 pb-[2px] pr-3 relative cursor-pointer">
                                                            <div className="size-9 rounded-full">
                                                                <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                                                                    className=" object-cover rounded-full ring-offset-1 outline-[0.5px] aspect-square overflow-clip" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="infoContainer min-w-0 border-b-slate-500 border-solid border-b-[0.5px] flex flex-col pr-4 grow cursor-pointer">
                                                            <div className=" pb-4 flex items-center justify-between grow">
                                                                <div className=" min-w-0 h-11 justify-center flex flex-col pr-2">
                                                                    <div className="flex items-center">
                                                                        <span className="flex items-center p-0 m-0 text-white">
                                                                            <a href="" className="">
                                                                                <span className="whitespace-pre-line text-base font-semibold text-left overflow-y-visible overflow-x-visible max-w-full">
                                                                                    ssadasxc
                                                                                </span>
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <span className="overflow-y-visible text-sm overflow-x-visible min-w-0 max-w-full">name</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flwButton min-w-[104px] h-[34px] border-[1px] border-solid border-slate-500 max-w-full whitespace-nowrap text-white rounded-lg justify-center shrink-0 cursor-pointer text-sm font-semibold z-0 relative px-1 items-center inline-flex">
                                                                    Follow
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pt-4 flex cursor-pointer pl-4 pointer-events-auto">
                                                        <div className="imgContainer h-fit pt-1 pb-[2px] pr-3 relative cursor-pointer">
                                                            <div className="size-9 rounded-full">
                                                                <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                                                                    className=" object-cover rounded-full ring-offset-1 outline-[0.5px] aspect-square overflow-clip" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="infoContainer min-w-0 border-b-slate-500 border-solid border-b-[0.5px] flex flex-col pr-4 grow cursor-pointer">
                                                            <div className=" pb-4 flex items-center justify-between grow">
                                                                <div className=" min-w-0 h-11 justify-center flex flex-col pr-2">
                                                                    <div className="flex items-center">
                                                                        <span className="flex items-center p-0 m-0 text-white">
                                                                            <a href="" className="">
                                                                                <span className="whitespace-pre-line text-base font-semibold text-left overflow-y-visible overflow-x-visible max-w-full">
                                                                                    ssadasxc
                                                                                </span>
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <span className="overflow-y-visible text-sm overflow-x-visible min-w-0 max-w-full">name</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flwButton min-w-[104px] h-[34px] border-[1px] border-solid border-slate-500 max-w-full whitespace-nowrap text-white rounded-lg justify-center shrink-0 cursor-pointer text-sm font-semibold z-0 relative px-1 items-center inline-flex">
                                                                    Follow
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pt-4 flex cursor-pointer pl-4 pointer-events-auto">
                                                        <div className="imgContainer h-fit pt-1 pb-[2px] pr-3 relative cursor-pointer">
                                                            <div className="size-9 rounded-full">
                                                                <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                                                                    className=" object-cover rounded-full ring-offset-1 outline-[0.5px] aspect-square overflow-clip" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="infoContainer min-w-0 border-b-slate-500 border-solid border-b-[0.5px] flex flex-col pr-4 grow cursor-pointer">
                                                            <div className=" pb-4 flex items-center justify-between grow">
                                                                <div className=" min-w-0 h-11 justify-center flex flex-col pr-2">
                                                                    <div className="flex items-center">
                                                                        <span className="flex items-center p-0 m-0 text-white">
                                                                            <a href="" className="">
                                                                                <span className="whitespace-pre-line text-base font-semibold text-left overflow-y-visible overflow-x-visible max-w-full">
                                                                                    ssadasxc
                                                                                </span>
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <span className="overflow-y-visible text-sm overflow-x-visible min-w-0 max-w-full">name</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flwButton min-w-[104px] h-[34px] border-[1px] border-solid border-slate-500 max-w-full whitespace-nowrap text-white rounded-lg justify-center shrink-0 cursor-pointer text-sm font-semibold z-0 relative px-1 items-center inline-flex">
                                                                    Follow
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pt-4 flex cursor-pointer pl-4 pointer-events-auto">
                                                        <div className="imgContainer h-fit pt-1 pb-[2px] pr-3 relative cursor-pointer">
                                                            <div className="size-9 rounded-full">
                                                                <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                                                                    className=" object-cover rounded-full ring-offset-1 outline-[0.5px] aspect-square overflow-clip" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="infoContainer min-w-0 border-b-slate-500 border-solid border-b-[0.5px] flex flex-col pr-4 grow cursor-pointer">
                                                            <div className=" pb-4 flex items-center justify-between grow">
                                                                <div className=" min-w-0 h-11 justify-center flex flex-col pr-2">
                                                                    <div className="flex items-center">
                                                                        <span className="flex items-center p-0 m-0 text-white">
                                                                            <a href="" className="">
                                                                                <span className="whitespace-pre-line text-base font-semibold text-left overflow-y-visible overflow-x-visible max-w-full">
                                                                                    ssadasxc
                                                                                </span>
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <span className="overflow-y-visible text-sm overflow-x-visible min-w-0 max-w-full">name</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flwButton min-w-[104px] h-[34px] border-[1px] border-solid border-slate-500 max-w-full whitespace-nowrap text-white rounded-lg justify-center shrink-0 cursor-pointer text-sm font-semibold z-0 relative px-1 items-center inline-flex">
                                                                    Follow
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pt-4 flex cursor-pointer pl-4 pointer-events-auto">
                                                        <div className="imgContainer h-fit pt-1 pb-[2px] pr-3 relative cursor-pointer">
                                                            <div className="size-9 rounded-full">
                                                                <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                                                                    className=" object-cover rounded-full ring-offset-1 outline-[0.5px] aspect-square overflow-clip" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="infoContainer min-w-0 border-b-slate-500 border-solid border-b-[0.5px] flex flex-col pr-4 grow cursor-pointer">
                                                            <div className=" pb-4 flex items-center justify-between grow">
                                                                <div className=" min-w-0 h-11 justify-center flex flex-col pr-2">
                                                                    <div className="flex items-center">
                                                                        <span className="flex items-center p-0 m-0 text-white">
                                                                            <a href="" className="">
                                                                                <span className="whitespace-pre-line text-base font-semibold text-left overflow-y-visible overflow-x-visible max-w-full">
                                                                                    ssadasxc
                                                                                </span>
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <span className="overflow-y-visible text-sm overflow-x-visible min-w-0 max-w-full">name</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flwButton min-w-[104px] h-[34px] border-[1px] border-solid border-slate-500 max-w-full whitespace-nowrap text-white rounded-lg justify-center shrink-0 cursor-pointer text-sm font-semibold z-0 relative px-1 items-center inline-flex">
                                                                    Follow
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pt-4 flex cursor-pointer pl-4 pointer-events-auto">
                                                        <div className="imgContainer h-fit pt-1 pb-[2px] pr-3 relative cursor-pointer">
                                                            <div className="size-9 rounded-full">
                                                                <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                                                                    className=" object-cover rounded-full ring-offset-1 outline-[0.5px] aspect-square overflow-clip" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="infoContainer min-w-0 border-b-slate-500 border-solid border-b-[0.5px] flex flex-col pr-4 grow cursor-pointer">
                                                            <div className=" pb-4 flex items-center justify-between grow">
                                                                <div className=" min-w-0 h-11 justify-center flex flex-col pr-2">
                                                                    <div className="flex items-center">
                                                                        <span className="flex items-center p-0 m-0 text-white">
                                                                            <a href="" className="">
                                                                                <span className="whitespace-pre-line text-base font-semibold text-left overflow-y-visible overflow-x-visible max-w-full">
                                                                                    ssadasxc
                                                                                </span>
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <span className="overflow-y-visible text-sm overflow-x-visible min-w-0 max-w-full">name</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flwButton min-w-[104px] h-[34px] border-[1px] border-solid border-slate-500 max-w-full whitespace-nowrap text-white rounded-lg justify-center shrink-0 cursor-pointer text-sm font-semibold z-0 relative px-1 items-center inline-flex">
                                                                    Follow
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            }
        </div>
    )
}

export default FollowingsMain