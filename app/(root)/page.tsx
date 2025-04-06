import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
    getInterviewsByUserId,
    getLatestInterviews,
} from "@/lib/actions/general.action";

async function Home() {
    const user = await getCurrentUser();

    const [userInterviews, allInterview] = await Promise.all([
        getInterviewsByUserId(user?.id!),
        getLatestInterviews({ userId: user?.id! }),
    ]);

    const hasPastInterviews = userInterviews?.length! > 0;
    const hasUpcomingInterviews = allInterview?.length! > 0;

    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg text-primary-200">
                    <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
                    <p className="text-lg">
                        Practice real interview questions & get instant feedback
                    </p>

                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/interview">Start an Interview</Link>
                    </Button>
                </div>

                <Image
                    src="/bu.png"
                    alt="Bug-dude"
                    width={400}
                    height={400}
                    className="max-sm:hidden"
                />
            </section>

            {/* New Assessment Card Section */}
            <section
                className="card-cta py-12 px-6 md:px-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg text-white">
                <h2 className="text-3xl font-bold text-primary-200 mb-8 text-center">
                    Practice Assessments
                </h2>
                <div className="interviews-section flex justify-center">
                    <div
                        className="border border-gray-700 rounded-2xl p-8 md:p-12 bg-zinc-950 max-w-2xl text-primary-200 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Sharpen Your Skills</h3>
                        <p className="mb-6 text-primary-200">
                            Get hands-on with aptitude, reasoning, comprehension, coding, and web development questions.
                            Perfect for interview prep and skill enhancement.
                        </p>
                        <Link href="/assessments">
                            <button
                                className="btn-primary max-sm:w-full">
                                Start Practicing →
                            </button>
                        </Link>
                    </div>
                </div>
            </section>


            <section className="flex flex-col gap-6 mt-8">
                <h2 className="text-primary-200">Your Interviews</h2>

                <div className="interviews-section">
                    {hasPastInterviews ? (
                        userInterviews?.map((interview) => (
                            <InterviewCard
                                key={interview.id}
                                userId={user?.id}
                                interviewId={interview.id}
                                role={interview.role}
                                type={interview.type}
                                techstack={interview.techstack}
                                createdAt={interview.createdAt}
                            />
                        ))
                    ) : (
                        <p>You haven&apos;t taken any interviews yet</p>
                    )}
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2 className="text-primary-200">Take Interviews</h2>

                <div className="interviews-section">
                    {hasUpcomingInterviews ? (
                        allInterview?.map((interview) => (
                            <InterviewCard
                                key={interview.id}
                                userId={user?.id}
                                interviewId={interview.id}
                                role={interview.role}
                                type={interview.type}
                                techstack={interview.techstack}
                                createdAt={interview.createdAt}
                            />
                        ))
                    ) : (
                        <p>There are no interviews available</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default Home;
