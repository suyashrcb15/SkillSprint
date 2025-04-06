"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AssessmentForm({ questions }: { questions: any[] }) {
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
    const router = useRouter();

    const handleChange = (qIdx: number, value: string) => {
        setSelectedAnswers((prev) => ({ ...prev, [qIdx]: value }));
    };

    // ✅ Your updated handleSubmit function
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const results = questions.map((q, idx) => {
            const selected = selectedAnswers[idx];
            return {
                question: q.question,
                answer: q.answer,
                selected,
                correct: selected === q.answer,
                explanation: q.explanation || "Explanation not provided.",
            };
        });

        const correctCount = results.filter((r) => r.correct).length;

        // Save results in localStorage so the result page can access it
        localStorage.setItem("assessmentResults", JSON.stringify(results));

        // Navigate without passing long results in query
// Navigate without passing long results in query
        router.push(`/assessments/result?correct=${correctCount}&total=${questions.length}`);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {questions.map((q, idx) => (
                <div key={idx} className="bg-black text-primary-200 p-4 rounded shadow">
                    <h2 className="font-semibold mb-2">
                        {idx + 1}. {q.question}
                    </h2>
                    <div className="space-y-2">
                        {Object.entries(q.options).map(([key, value]) => (
                            <label key={key} className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name={`question-${idx}`}
                                    value={key}
                                    checked={selectedAnswers[idx] === key}
                                    onChange={() => handleChange(idx, key)}
                                    className="text-blue-500"
                                />
                                <span>{key}: {value}</span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}

            <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
                Submit Assessment
            </button>
        </form>
    );
}
