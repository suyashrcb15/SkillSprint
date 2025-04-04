import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser, getInterviewByUserId, getLatestInterviews } from "@/lib/actions/auth.action";

const Page = async () => {
    const user = await getCurrentUser();

    if (!user?.id) {
        return (
            <div className="p-4 text-center">
                <p>User not logged in</p>
            </div>
        );
    }

    const [userInterviews, latestInterviews] = await Promise.all([
        getInterviewByUserId(user.id),
        getLatestInterviews({ userId: user.id }),
    ]);

    const hasPastInterviews = userInterviews && userInterviews.length > 0;
    const hasUpcomingInterviews = latestInterviews && latestInterviews.length > 0;

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
                <Image
                    src="/ro.png"
                    alt="robo-dude"
                    width={400}
                    height={40}
                    className="max-sm:hidden"
                />
            </section>

            {/* Your Interviews */}
            <section className="flex flex-col gap-6 mt-8">
                <h2 className="text-primary-200">Your Interviews</h2>
                <div className="interviews-section">
                    {hasPastInterviews ? (
                        userInterviews.map((interview) => (
                            <InterviewCard {...interview} key={interview.id} />
                        ))
                    ) : (
                        <p>You haven't taken any interviews yet</p>
                    )}
                </div>
            </section>

            {/* Upcoming Interviews */}
            <section className="flex flex-col gap-6 mt-8">
                <h2 className="text-primary-200">Take Your Interview</h2>
                <div className="interviews-section">
                    {hasUpcomingInterviews ? (
                        latestInterviews.map((interview) => (
                            <InterviewCard {...interview} key={interview.id} />
                        ))
                    ) : (
                        <p>No New Interviews Available</p>
                    )}
                </div>
            </section>
        </>
    );
};

export default Page;
