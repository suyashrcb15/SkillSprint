import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";


const Page=()=>{
    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2 className="text-primary-200">Get Job Ready using AI</h2>
                    <p className="text-lg">Practice Interview using AI</p>
                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/interview">Begin Interview</Link>
                    </Button>
                </div>
                <Image src="/ro.png" alt="robo-dude" width={400} height={40} className="max-sm:hidden"/>
            </section>
            <section className="flexvflex-col gap-6 mt-8">
                <h2 className="text-primary-200">Your Interviews</h2>
                <div className="interviews-section">
                    {dummyInterviews.map((interview)=>(
                        <InterviewCard{...interview} key={interview.id}/>
                    ))}
                </div>
            </section>
            <section className="flex flex-col gap-6 mt-8">
                <h2 className="text-primary-200">Take Your Interview</h2>
                <div className="interviews-section">
                    {dummyInterviews.map((interview)=>(
                        <InterviewCard{...interview} key={interview.id}/>
                    ))}
                    {/*<p>You Have not Taken InterView Yet</p>*/}
                </div>
            </section>
        </>
    )
}
export default Page