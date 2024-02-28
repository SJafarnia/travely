import { getUserPostsByEmailOrUsername } from '@/lib/db/queries';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import RemoveButton from '../RemoveButton';

async function EditTravels() {
    const session = await getServerSession();
    const posts = await getUserPostsByEmailOrUsername(session?.user?.email);

    return (
        <div className='scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 w-full overflow-auto bg-Night/95 text-white @container'>
            <ul className='@md:m-8 [&>li]:m-4 [&>li]:my-6'>
                {posts.length > 0 &&
                    posts.map((post) => (
                        <li
                            key={post.id}
                            className='flex items-center justify-between gap-4'
                        >
                            <Link
                                href={`/user/dashboard/edit/${post.id}`}
                                className='flex grow cursor-pointer items-center justify-between gap-4'
                            >
                                <div className='flex gap-2'>{post.title}</div>
                                <div className='@md:mx-4'>
                                    <Image
                                        src={`${post.parts[0].imageGallery[0].link}`}
                                        alt='travelPhoto'
                                        width={128}
                                        height={128}
                                        className='w-full rounded-md'
                                    />
                                </div>
                            </Link>
                            <RemoveButton
                                data={{ fieldToRemove: 'travel', id: post.id }}
                            />
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default EditTravels;
