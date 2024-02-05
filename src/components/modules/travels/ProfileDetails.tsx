import Image from "next/image"

function ProfileDetails() {
    return (
        <>
            <div className="w-1/5 flex justify-center">
                {/* TODO: replace with user image */}
                <Image src={"/images/airport.jpg"} height={600} width={600} className="rounded-full w-32 h-32" alt="k"></Image>
            </div>
            <div className="flex flex-col gap-1 justify-around w-1/3 flex-grow">
                <span className="">User091</span>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <div className="ml-1 text-sm">
                        <span>California,</span> <span>LA</span>
                    </div>
                </div>
                <button className="rounded-md border border-creamWhite/30 hover:border-creamWhite/80 transition-all duration-150 ease-in-out text-white bg-jet/40 p-1 hover:bg-jet/70 mt-2">Follow</button>
            </div>
        </>
    )
}

export default ProfileDetails