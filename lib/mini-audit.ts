export type QuizVersion = "law_firm" | "general";

export type ResultCategory =
  | "Early Stage"
  | "In Progress"
  | "Advanced but Exposed";

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: readonly string[];
};

export const branchQuestion = {
  prompt: "Is your business a law firm?",
  options: ["Yes, we're a law firm", "No, different industry"] as const,
};

export const lawFirmQuestions: readonly QuizQuestion[] = [
  {
    id: "ai_use",
    prompt: "Does your firm currently use any AI tools for daily work?",
    options: [
      "Yes, regularly",
      "Occasionally, a few people",
      "No, not yet",
    ],
  },
  {
    id: "policy",
    prompt:
      "Do you have a written policy on which AI tools are approved and what client data can go into them?",
    options: ["Yes", "No", "Not sure"],
  },
  {
    id: "response_time",
    prompt:
      "How long does it typically take your firm to respond to a new client inquiry?",
    options: ["Under 15 minutes", "Within a few hours", "A day or more"],
  },
  {
    id: "time_spent",
    prompt:
      "How much time does your team spend weekly on document review, contract review, or legal research?",
    options: ["Less than 5 hours", "5–15 hours", "More than 15 hours"],
  },
  {
    id: "concern",
    prompt:
      "Has your firm had any AI-related concern, an uncertain citation, a tool you weren't sure was safe, a client asking about your AI use?",
    options: ["Yes", "No", "Not sure"],
  },
] as const;

export const generalQuestions: readonly QuizQuestion[] = [
  {
    id: "ai_use",
    prompt: "Does your business currently use any AI tools for daily work?",
    options: [
      "Yes, regularly",
      "Occasionally, a few people",
      "No, not yet",
    ],
  },
  {
    id: "policy",
    prompt:
      "Do you have a clear policy on which AI tools are approved and what company data can go into them?",
    options: ["Yes", "No", "Not sure"],
  },
  {
    id: "response_time",
    prompt:
      "How long does it typically take your team to respond to a new customer inquiry?",
    options: ["Under 15 minutes", "Within a few hours", "A day or more"],
  },
  {
    id: "time_spent",
    prompt:
      "How much time does your team spend weekly on repetitive tasks like data entry, email, or reporting?",
    options: ["Less than 5 hours", "5–15 hours", "More than 15 hours"],
  },
  {
    id: "concern",
    prompt:
      "Has your business had any concern around AI use, data safety, accuracy, or a customer asking about it?",
    options: ["Yes", "No", "Not sure"],
  },
] as const;

export const resultCopy: Record<
  ResultCategory,
  { headline: string; body: string }
> = {
  "Early Stage": {
    headline: "Early Stage",
    body: "You're early in your AI journey, which means there's real opportunity here. A structured assessment shows you exactly where to start safely.",
  },
  "In Progress": {
    headline: "In Progress",
    body: "You've started, but there are likely gaps in governance or workflow costing you time or creating risk you're not aware of.",
  },
  "Advanced but Exposed": {
    headline: "Advanced but Exposed",
    body: "You're using AI actively, but without a clear policy, that's a bigger risk than not using it at all.",
  },
};

export function questionsFor(version: QuizVersion) {
  return version === "law_firm" ? lawFirmQuestions : generalQuestions;
}

/** Risk signal: No / Not sure / low maturity answers score higher. */
function optionRisk(questionId: string, answer: string): number {
  if (questionId === "ai_use") {
    if (answer === "No, not yet") return 2;
    if (answer === "Occasionally, a few people") return 1;
    return 0;
  }
  if (questionId === "policy" || questionId === "concern") {
    if (answer === "No" || answer === "Not sure") return 2;
    return 0;
  }
  if (questionId === "response_time") {
    if (answer === "A day or more") return 2;
    if (answer === "Within a few hours") return 1;
    return 0;
  }
  if (questionId === "time_spent") {
    if (answer === "More than 15 hours") return 2;
    if (answer === "5–15 hours") return 1;
    return 0;
  }
  return 0;
}

export function scoreResult(
  version: QuizVersion,
  answers: Record<string, string>,
): ResultCategory {
  const questions = questionsFor(version);
  const aiUse = answers.ai_use;
  const policy = answers.policy;
  const concern = answers.concern;

  const heavyAi = aiUse === "Yes, regularly";
  const weakPolicy = policy === "No" || policy === "Not sure";
  const weakConcern = concern === "No" || concern === "Not sure";

  if (heavyAi && weakPolicy && weakConcern) {
    return "Advanced but Exposed";
  }

  let riskSignals = 0;
  let highRiskCount = 0;

  for (const q of questions) {
    const answer = answers[q.id];
    if (!answer) continue;
    const risk = optionRisk(q.id, answer);
    riskSignals += risk;
    if (risk >= 2) highRiskCount += 1;
  }

  // Mostly No / Not sure / early answers
  if (aiUse === "No, not yet" || highRiskCount >= 3 || riskSignals >= 7) {
    return "Early Stage";
  }

  return "In Progress";
}
