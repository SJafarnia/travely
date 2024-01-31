import Image from "next/image"
import Link from "next/link"
import { PiYoutubeLogoLight, PiInstagramLogoLight, PiFacebookLogoLight, PiTiktokLogoLight } from "react-icons/pi";

function TravelsMain() {
    return (
        <div className="w-full md:max-w-5xl h-auto my-20 mx-auto text-white">
            <div className="profile info bg-Night/95 p-4 flex my-16 [&>div]:p-5 rounded-md justify-between">
                <div className="prof pic w-1/5 flex justify-center">
                    <Image src={"/images/airport.jpg"} height={600} width={600} className="rounded-full w-32 h-32" alt="k"></Image>
                </div>
                <div className="user name & info flex flex-col gap-1 justify-around w-1/3 flex-grow">
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
                <div className="socials text-sm w-1/3 ">
                    <p>Socials :</p>
                    <div className="grid grid-cols-2 gap-3 [&>div]:ml-4 mt-4">
                        <div>
                            <a href={"https://www.instagram.com"} className="flex gap-2">
                                <PiInstagramLogoLight className="text-white w-5 h-5" />
                                <span>S__jafarnia</span>
                            </a>
                        </div>
                        <div>
                            <a href={"https://www.instagram.com"} className="flex gap-2">
                                <PiYoutubeLogoLight className="text-white w-5 h-5" />
                                <span>S__jafarnia</span>
                            </a>
                        </div>
                        <div>
                            <a href={"https://www.instagram.com"} className="flex gap-2">
                                <PiFacebookLogoLight className="text-white w-5 h-5" />
                                <span>S__jafarnia</span>
                            </a>
                        </div>
                        <div>
                            <a href={"https://www.instagram.com"} className="flex gap-2">
                                <PiTiktokLogoLight className="text-white w-5 h-5" />
                                <span>S__jafarnia</span>
                            </a>
                        </div>
                        <div>
                            <a href={"https://www.instagram.com"} className="flex gap-2">
                                <PiFacebookLogoLight className="text-white w-5 h-5" />
                                <span>S__jafarnia</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap-8 grid-cols-1 md:grid-cols-3 grid">
                <Link href={`/user/1/travels/${1}`} scroll={false}>
                    <Image src={"/images/airport.jpg"} height={600} width={600} className=" rounded-md" alt="k"></Image>
                </Link>

                <Link href={`/user/1/travels/${2}`} scroll={false}>
                    <Image src={"/images/japan.jpg"} height={600} width={600} className=" rounded-md" alt="k"></Image>
                </Link>
                <Link href={`/user/1/travels/${1}`} scroll={false}>
                    <Image src={"/images/airport.jpg"} height={600} width={600} className=" rounded-md" alt="k"></Image>
                </Link>

                <Link href={`/user/1/travels/${2}`} scroll={false}>
                    <Image src={"/images/japan.jpg"} height={600} width={600} className=" rounded-md" alt="k"></Image>
                </Link>
                <Link href={`/user/1/travels/${1}`} scroll={false}>
                    <Image src={"/images/airport.jpg"} height={600} width={600} className=" rounded-md" alt="k"></Image>
                </Link>

                <Link href={`/user/1/travels/${2}`} scroll={false}>
                    <Image src={"/images/japan.jpg"} height={600} width={600} className=" rounded-md" alt="k"></Image>
                </Link>
            </div>
        </div >
    )
}

export default TravelsMain