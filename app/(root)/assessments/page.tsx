'use client';

import Link from "next/link";

const allQuestions = {
    aptitude: true,
    reasoning: true,
    comprehension: true,
    coding: true,
    "web-development": true,
    // other categories are not implemented in generateAssessmentQuestions
};

const categories = [
    { name: "Aptitude", slug: "aptitude" },
    { name: "Logical Reasoning", slug: "reasoning" },
    { name: "Comprehension", slug: "comprehension" },
    { name: "Coding", slug: "coding" },
    { name: "Web Development", slug: "web-development" },
    { name: "Quantitative Aptitude", slug: "quantitative-aptitude" },
    { name: "Data Interpretation", slug: "data-interpretation" },
    { name: "Database / SQL", slug: "database-sql" },
    { name: "CS Fundamentals", slug: "cs-fundamentals" },
    { name: "Personality Test", slug: "personality" },
    { name: "System Design", slug: "system-design" },
    { name: "HR Round", slug: "hr" },
    { name: "Communication Skills", slug: "communication" },
];

export default function AssessmentLandingPage() {
    return (
        <section className="p-10">
            <Link href="/">
                <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    ← Get Back to Dashboard
                </button>
            </Link>
            <h1 className="text-3xl font-bold mb-6 text-primary-200">
                Practice Assessments
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories
                    .filter(cat => allQuestions[cat.slug]) // show only implemented ones
                    .map((cat) => (
                        <Link key={cat.slug} href={`/assessments/${cat.slug}`}>
                            <div className="border p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer text-primary-200 hover:bg-gray-50">
                                <h2 className="text-xl font-semibold">{cat.name}</h2>
                                <p className="text-sm mt-1">Practice {cat.name} questions</p>
                            </div>
                        </Link>
                    ))}
            </div>
        </section>
    );
}
