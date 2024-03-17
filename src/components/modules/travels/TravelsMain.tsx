import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '@/utils/textModifiers';
import Socials from './Socials';
import ProfileDetails from './ProfileDetails';
import { notFound } from 'next/navigation';
import { getUserPageDataByEmailOrUsername } from '@/lib/db/queries/getQueries';

async function TravelsMain({ user }: { user: string }) {
    const userData = await getUserPageDataByEmailOrUsername(user);

    if (!userData) return notFound();

    return (
        <div className='mx-auto my-20 h-auto w-full text-white md:max-w-5xl'>
            <div className='profile info my-16 flex justify-between rounded-md bg-Night/95 p-4 [&>div]:p-5'>
                <ProfileDetails
                    username={user}
                />
                {/* <Socials /> */}
            </div>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                {userData.posts.map((post) => (
                    <Link
                        key={post.id}
                        href={`/user/${post.author.email}/travels/${slugify(post.id)}`}
                        scroll={false}
                    >
                        {post.parts[0]?.imageGallery[0]?.link.startsWith(
                            'https://'
                        ) ? (
                            <Image
                                src={`${post.parts[0]?.imageGallery[0]?.link}`}
                                height={600}
                                width={600}
                                className='h-full rounded-md shadow-md'
                                alt='k'
                            ></Image>
                        ) : (
                            // TODO: replace with a default 404 image
                            <Image
                                src={'/images/airport.jpg'}
                                height={600}
                                width={600}
                                className='h-full rounded-md shadow-md'
                                alt='k'
                            ></Image>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default TravelsMain;
