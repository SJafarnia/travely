"use client"
import Image from 'next/image';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkIcon = () => <></>;


export default function Travel() {
    return (
        <div className="App my-20 mx-4">
            <VerticalTimeline
                animate={false}>
                {Array(4).fill("x").map((item, indx) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ padding: "unset", background: "#FFFDD0", color: "#010203", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
                        contentArrowStyle={{ borderRight: "7px solid  #FFFDD0" }}
                        date="date"
                        visible={true}
                        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                        icon={<WorkIcon />}
                    >
                        <div className='p-6'>
                            <h3 className="vertical-timeline-element-title">Title for part {indx + 1} of trip</h3>
                            <h4 className="vertical-timeline-element-subtitle">Miami, FL(location)</h4>
                            <p>
                                description(small)
                            </p>
                        </div>
                        <Image src={"/images/shore.jpg"} className='rounded-sm max-h-[289.13px] object-center' height={1000} width={1000} alt='imageName'></Image>
                    </VerticalTimelineElement>

                ))}
            </VerticalTimeline>
        </div>
    )
}

