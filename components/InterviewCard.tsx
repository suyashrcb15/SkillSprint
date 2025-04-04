import dayjs from "dayjs";
import Image from "next/image";
import {getRandomInterviewCover} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import DisplayTechIcons from "@/components/DisplayTechIcons";

const InterviewCard = ({id, userId, role, type, techstack, createdAt}: InterviewCardProps) => {
    const feeback=null as Feedback | null;
    const normalizedType=/mix/gi.test(type)? 'Mixed': type;
    const formattedDate=dayjs(feeback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');
    return (
        <div className="card-border w-[360px] max-sm:w-full min-h-96">
            <div className="card-interview">
                <div>
                    <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-800">
                        <p className="badge-text">{normalizedType}</p>
                    </div>
                    <Image src={getRandomInterviewCover()} alt="cover image" width={90} height={90}
                           className="rounded-full object-fit size-[90px]"/>
                    <h3 className="mt-5 capitalize text-primary-200">
                        {role} Interview
                    </h3>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-row gap-2">
                            <Image
                                src="/calendar.svg"
                                width={22}
                                height={22}
                                alt="calendar"
                            />
                            <p>{formattedDate}</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <Image src="/star.svg" alt="star" width={22} height={22}/>
                            <p>{feeback?.totalScore || '---'}/100</p>
                        </div>
                    </div>
                    <p className="line-clamp-2 mt-5">
                        {feeback?.finalAssessment ||
                            "No interview yet. Take it now to improve your skills."}
                    </p>
                </div>
                <div className="flex flex-row justify-between">
                    <DisplayTechIcons techStack={techstack}/>

                    <Button className="btn-primary">
                        <Link
                            href={
                                feeback
                                    ? `/interview/${id}/feedback`
                                    : `/interview/${id}`
                            }
                        >
                            {feeback? "Check Feedback" : "View Interview"}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default InterviewCard
