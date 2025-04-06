import { create } from 'zustand';

interface Question {
    question: string;
    options: string[];
    answer: string;
    explanation: string;
    selected?: string;
    isCorrect?: boolean;
}

interface AssessmentState {
    results: Question[];
    setResults: (data: Question[]) => void;
}

export const useAssessmentStore = create<AssessmentState>((set) => ({
    results: [],
    setResults: (data) => set({ results: data }),
}));
