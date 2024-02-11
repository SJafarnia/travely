import {
    PiYoutubeLogoLight,
    PiInstagramLogoLight,
    PiFacebookLogoLight,
    PiTiktokLogoLight,
} from 'react-icons/pi';

function Socials() {
    return (
        <div className='socials w-1/3 text-sm '>
            <p>Socials :</p>
            <div className='mt-4 grid grid-cols-2 gap-3 [&>div]:ml-4'>
                <div>
                    <a
                        href={'https://www.instagram.com'}
                        className='flex gap-2'
                    >
                        <PiInstagramLogoLight className='h-5 w-5 text-white' />
                        <span>S__jafarnia</span>
                    </a>
                </div>
                <div>
                    <a
                        href={'https://www.instagram.com'}
                        className='flex gap-2'
                    >
                        <PiYoutubeLogoLight className='h-5 w-5 text-white' />
                        <span>S__jafarnia</span>
                    </a>
                </div>
                <div>
                    <a
                        href={'https://www.instagram.com'}
                        className='flex gap-2'
                    >
                        <PiFacebookLogoLight className='h-5 w-5 text-white' />
                        <span>S__jafarnia</span>
                    </a>
                </div>
                <div>
                    <a
                        href={'https://www.instagram.com'}
                        className='flex gap-2'
                    >
                        <PiTiktokLogoLight className='h-5 w-5 text-white' />
                        <span>S__jafarnia</span>
                    </a>
                </div>
                <div>
                    <a
                        href={'https://www.instagram.com'}
                        className='flex gap-2'
                    >
                        <PiFacebookLogoLight className='h-5 w-5 text-white' />
                        <span>S__jafarnia</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Socials;
