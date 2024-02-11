'use client';
import { travelDataType } from '@/lib/types/types';
import Image from 'next/image';
import Link from 'next/link';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { CldImage } from 'next-cloudinary';

const TravelIcon = ({ imgLink }: { imgLink: string }) => (
    <CldImage
        src={imgLink}
        height={300}
        width={300}
        alt='profilePic'
        className='h-full w-full rounded-full object-cover'
    ></CldImage>
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
                        <TravelIcon imgLink={part.imageGallery[1].publicId} />
                    }
                >
                    <Link
                        href={`/user/${travelData.author.email}/travels/${travelId}/parts/${index + 1}`}
                        scroll={false}
                    >
                        <div className='p-6 text-white shadow-md '>
                            <div className='flex flex-col gap-2'>
                                <h3 className='vertical-timeline-element-title text-lg font-semibold'>
                                    {part.title}
                                </h3>
                                <h4 className='vertical-timeline-element-subtitle !ml-2 text-base italic'>
                                    - Miami, FL
                                </h4>
                            </div>
                            <p className='!text-sm !font-normal'>
                                {part.description}
                            </p>
                        </div>
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
