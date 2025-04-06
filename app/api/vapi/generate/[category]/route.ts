// app/api/generate/[category]/route.ts
import { NextResponse } from "next/server";
import { generateAssessmentQuestions } from "@/lib/utils/generateQuestions";

export async function GET(req: Request, { params }: { params: { category: string } }) {
    const { category } = params;
    const questions = await generateAssessmentQuestions(category);

    return NextResponse.json({ questions });
}
