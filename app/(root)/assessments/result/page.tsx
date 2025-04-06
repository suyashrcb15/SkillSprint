'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type AssessmentResult = {
    question: string;
    answer: string;
    selected: string;
    correct: boolean;
    explanation: string;
};

export default function ResultPage() {
    const [results, setResults] = useState<AssessmentResult[]>([]);
    const searchParams = useSearchParams();
    const router = useRouter();

    const correct = searchParams.get('correct');
    const total = searchParams.get('total');

    useEffect(() => {
        const storedResults = localStorage.getItem('assessmentResults');
        if (storedResults) {
            try {
                const parsedResults = JSON.parse(storedResults) as AssessmentResult[];
                setResults(parsedResults);
            } catch (error) {
                console.error('Error parsing assessment results:', error);
            }
        }
    }, []);

    const handleRetake = () => {
        localStorage.removeItem('assessmentResults');
        router.push('/assessments');
    };

    const handleDashboard = () => {
        router.push('/');
    };

    const handleGoToCategories = () => {
        router.push('/assessments');
    };

    return (
        <div className="p-6 max-w-4xl mx-auto text-white">
            <h1 className="text-3xl font-bold mb-6 text-center">Assessment Results</h1>

            <div className="mb-4 text-lg font-semibold text-center">
                Correct: <span className="text-green-400">{correct}</span> / {total}
            </div>

            <div className="flex justify-center gap-4 mb-6">
                <button
                    onClick={handleDashboard}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
                >
                    Get back to Dashboard
                </button>
                <button
                    onClick={handleRetake}
                    className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded text-white"
                >
                    Retake Assessment
                </button>
            </div>

            <div className="grid gap-6">
                {results.map((res, idx) => (
                    <div key={idx} className="bg-zinc-900 p-4 rounded shadow-md">
                        <h2 className="font-semibold mb-2">
                            {idx + 1}. {res.question}
                        </h2>
                        <p>
                            <strong>Your Answer:</strong>{' '}
                            <span className={res.correct ? 'text-green-400' : 'text-red-400'}>
                                {res.selected} {res.correct ? '(Correct)' : '(Incorrect)'}
                            </span>
                        </p>
                        {!res.correct && (
                            <p>
                                <strong>Correct Answer:</strong>{' '}
                                <span className="text-green-400">{res.answer}</span>
                            </p>
                        )}
                        <p className="mt-2 text-sm text-gray-300">
                            <strong>Explanation:</strong> {res.explanation}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
