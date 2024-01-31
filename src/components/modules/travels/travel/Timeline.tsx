import { formattedDate } from '@/components/utils/getDate';
import Image from 'next/image';
import Link from 'next/link';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const WorkIcon = () => <Image src={"/images/shore.jpg"} height={300} width={300} alt='profilePic' className='r rounded-full h-full w-full object-cover'></Image>;

function Timeline() {
    return (
        <VerticalTimeline
            animate={false}>
            {Array(4).fill("x").map((item, indx) => (

                <VerticalTimelineElement
                    key={indx}
                    className="vertical-timeline-element--work rounded-md"
                    contentStyle={{ padding: "unset", WebkitBoxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000)", borderRadius: "0.375rem", background: "rgb(18 19 15 / 0.95)", color: "#fffffa", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
                    contentArrowStyle={{ borderRight: "7px solid  #12130F" }}
                    date={`${formattedDate}`}
                    visible={true}
                    dateClassName='text-creamWhite !opacity-100'
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#12130F" }}
                    icon={<WorkIcon />}
                >
                    <Link href={`/user/${1}/travels/${1}/parts/${indx + 1}`} scroll={false} className=''>
                        <div className='p-6 shadow-md text-white'>
                            <div className='flex flex-col gap-2'>
                                <h3 className="vertical-timeline-element-title font-semibold text-lg">Title for part {indx + 1} of trip</h3>
                                <h4 className="vertical-timeline-element-subtitle text-base italic !ml-2">- Miami, FL(location)</h4>
                            </div>
                            <p className='!text-sm !font-normal'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ipsum quae a aut explicabo fugit eius, omnis repudiandae enim officia recusandae at tenetur debitis deserunt facilis repellat magnam iure ratione.
                            </p>
                        </div>
                        <Image src={"/images/shore.jpg"} className='rounded-b-md shadow-2xl max-h-[289.13px] object-center' height={1000} width={1000} alt='imageName'></Image>
                    </Link>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    )
}

export default Timeline