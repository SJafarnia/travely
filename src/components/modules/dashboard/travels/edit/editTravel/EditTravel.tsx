'use client';
import Image from 'next/image';
import Link from 'next/link';
import RemoveButton from '../RemoveButton';
import useFetchTravelData from '@/components/hooks/useFetchTravelData';

async function EditTravels({ travelId }: { travelId: string }) {
    const parts = useFetchTravelData(travelId);

    return (
        <div className='scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 w-full overflow-auto bg-Night/95 text-white @container'>
            <ul className='@md:m-8 [&>li]:m-4 [&>li]:my-6'>
                {parts?.length > 0 &&
                    parts?.map((part) => (
                        <li
                            key={part.title}
                            className='flex h-[150px] items-center justify-center gap-4 '
                        >
                            <Link
                                href={`/log/edit/part/${part.id}`}
                                className='flex h-[150px] grow cursor-pointer items-center justify-between gap-4'
                            >
                                <div className='flex w-2/3 gap-2 '>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='h-6 w-6'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                                        />
                                    </svg>
                                    <p className='line-clamp-3 w-2/3 text-ellipsis'>
                                        {part.title}
                                    </p>
                                </div>
                                <div className='max-h-full w-1/3 @md:mx-4'>
                                    <Image
                                        src={`${part.imageGallery[0].link}`}
                                        alt='travelPhoto'
                                        width={128}
                                        height={128}
                                        className='max-h-[150px] w-full rounded-md'
                                    />
                                </div>
                            </Link>
                            <RemoveButton
                                data={{
                                    fieldToRemove: 'travelPart',
                                    id: part.id,
                                }}
                            />
                        </li>
                    ))}
            </ul>
            <div className='relative'>
                {parts?.length > 0 && (
                    <p className='mx-5 ml-auto mt-12 @md:mx-12 @md:mt-16'>
                        <Link
                            href={`/log/add/${travelId}`}
                            className='ml-auto block h-10 w-10 cursor-pointer'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='h-10 w-10 transition-colors ease-in-out hover:text-green-500 @md:h-12 @md:w-12'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                                />
                            </svg>
                        </Link>
                    </p>
                )}
            </div>
        </div>
    );
}

export default EditTravels;
