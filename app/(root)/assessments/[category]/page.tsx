import AssessmentForm from "@/components/AssessmentForm";
import { generateAssessmentQuestions } from "@/lib/utils/generateQuestions";

export default async function AssessmentPage({ params }: { params: { category: string } }) {
    const data = await generateAssessmentQuestions(params.category);
    const isComprehension = typeof data === "object" && data.passage && data.questions;
    const questions = isComprehension ? data.questions : data;

    return (
        <section className="p-10 text-primary-200">
            <h1 className="text-2xl font-bold mb-6 capitalize">
                {params.category} Assessment
            </h1>

            {isComprehension && (
                <div className="p-4 rounded-md mb-6 text-black">
                    <h2 className="text-lg font-semibold mb-2 text-primary-200">Passage:</h2>
                    <p className="whitespace-pre-line">{data.passage}</p>
                </div>
            )}

            <AssessmentForm questions={questions} />
        </section>
    );
}
