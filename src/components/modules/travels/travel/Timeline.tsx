'use client';
import { travelDataType } from '@/lib/types/types';
import Link from 'next/link';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { CldImage } from 'next-cloudinary';
import LikeButton from './LikeButton';

const TravelIcon = ({ imgLink }: { imgLink: string }) => (
    <CldImage
        src={imgLink}
        height={300}
        width={300}
        alt='profilePic'
        className='h-full w-full rounded-full object-cover'
    />
);

function Timeline({
    travelId,
    travelData,
}: {
    travelId: string;
    travelData: travelDataType;
}) {
    if (!travelData) return;
    
    return (
        <VerticalTimeline animate={false}>
            {travelData.parts.map((part, index) => (
                <VerticalTimelineElement
                    key={part.id}
                    className='vertical-timeline-element--work rounded-md'
                    contentStyle={{
                        padding: 'unset',
                        WebkitBoxShadow:
                            'var(--tw-ring-offset-shadow, 0 0 #0000)',
                        borderRadius: '0.375rem',
                        background: 'rgb(18 19 15 / 0.95)',
                        color: '#fffffa',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #12130F' }}
                    date={`${part.date.getDate()} - ${part.date.getMonth()} - ${part.date.getFullYear()}`}
                    visible={true}
                    dateClassName='text-Night !opacity-100'
                    iconClassName='!shadow-2xl border-red !border-2 border-solid border-creamWhite'
                    iconStyle={{}}
                    icon={
                        <TravelIcon imgLink={part.imageGallery[0].publicId} />
                    }
                >
                    <div className='p-6 text-white shadow-md '>
                        <div className='flex flex-col gap-2'>
                            <Link
                                href={`/user/${travelData.author.email}/travels/${travelId}/parts/${index + 1}`}
                                scroll={false}
                            >
                                <h3 className='vertical-timeline-element-title text-lg font-semibold'>
                                    {part.title}
                                </h3>
                            </Link>
                            <div className='flex gap-4'>
                                <h4 className='vertical-timeline-element-subtitle !ml-2 text-base italic'>
                                    - Miami, FL
                                </h4>
                                <LikeButton travelId={travelId} likes={travelData.likes.length} />
                            </div>
                        </div>
                        <p className='!text-sm !font-normal'>
                            {part.description}
                        </p>
                    </div>
                    <Link
                        href={`/user/${travelData.author.email}/travels/${travelId}/parts/${index + 1}`}
                        scroll={false}
                    >
                        <CldImage
                            width='1000'
                            height='600'
                            src={part.imageGallery[0].publicId}
                            alt=''
                            className='max-h-[283px] rounded-b-md object-center shadow-2xl'
                        />
                    </Link>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
}

export default Timeline;
