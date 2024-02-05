import { PiYoutubeLogoLight, PiInstagramLogoLight, PiFacebookLogoLight, PiTiktokLogoLight } from "react-icons/pi";

function Socials() {
    return (
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

    )
}

export default Socials