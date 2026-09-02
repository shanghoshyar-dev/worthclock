"use client";

import { useState, useTransition, type FormEvent } from "react";
import { ButtonLink } from "@/components/Button";
import {
  branchQuestion,
  getAnswerFlags,
  getNextStepPlan,
  questionsFor,
  resultCopy,
  scoreResult,
  type QuizVersion,
  type ResultCategory,
} from "@/lib/mini-audit";

type Phase = "branch" | "questions" | "email" | "result";

const totalQuestionSteps = 5;

export function MiniAuditQuiz() {
  const [phase, setPhase] = useState<Phase>("branch");
  const [version, setVersion] = useState<QuizVersion | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [result, setResult] = useState<ResultCategory | null>(null);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const questions = version ? questionsFor(version) : [];
  const current = questions[stepIndex];
  const resultFlags =
    phase === "result" && version ? getAnswerFlags(version, answers) : [];
  const nextSteps =
    phase === "result" && version && result
      ? getNextStepPlan(version, result)
      : [];

  // Progress: branch = 0, then 1–5 questions, email before result
  const progressTotal = totalQuestionSteps + 1; // branch + 5 questions
  const progressCurrent =
    phase === "branch"
      ? 0
      : phase === "questions"
        ? stepIndex + 1
        : progressTotal;

  function selectBranch(option: string) {
    setError("");
    const next: QuizVersion =
      option === "Yes, we're a law firm" ? "law_firm" : "general";
    setVersion(next);
    setAnswers({});
    setStepIndex(0);
    setPhase("questions");
  }

  function selectAnswer(option: string) {
    if (!current || !version) return;
    setError("");
    const nextAnswers = { ...answers, [current.id]: option };
    setAnswers(nextAnswers);

    if (stepIndex < questions.length - 1) {
      setStepIndex((i) => i + 1);
      return;
    }

    setPhase("email");
  }

  function submitLead(e: FormEvent) {
    e.preventDefault();
    if (!version) return;

    const trimmedEmail = email.trim();
    const trimmedCompany = company.trim();
    if (!trimmedEmail || !trimmedCompany) {
      setError("Please enter your email and company name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    const category = scoreResult(version, answers);
    setError("");

    startTransition(async () => {
      try {
        const res = await fetch("/api/mini-audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: trimmedEmail,
            companyName: trimmedCompany,
            version,
            answers,
            resultCategory: category,
          }),
        });

        if (!res.ok) {
          const data = (await res.json().catch(() => null)) as {
            error?: string;
          } | null;
          setError(
            data?.error ??
              "Something went wrong saving your result. Please try again.",
          );
          return;
        }

        setResult(category);
        setPhase("result");
      } catch {
        setError("Something went wrong. Please try again.");
      }
    });
  }

  return (
    <div className="mx-auto max-w-2xl">
      {phase !== "result" ? (
        <div className="mb-10" aria-hidden="true">
          <div className="h-0.5 w-full bg-line">
            <div
              className="h-full bg-brass transition-[width] duration-300 ease-out"
              style={{
                width: `${(progressCurrent / progressTotal) * 100}%`,
              }}
            />
          </div>
        </div>
      ) : null}

      <div className="transition-opacity duration-200">
        {phase === "branch" ? (
          <QuestionScreen
            eyebrow="Mini Audit"
            prompt={branchQuestion.prompt}
            options={[...branchQuestion.options]}
            onSelect={selectBranch}
          />
        ) : null}

        {phase === "questions" && current ? (
          <QuestionScreen
            eyebrow="Mini Audit"
            prompt={current.prompt}
            options={[...current.options]}
            onSelect={selectAnswer}
          />
        ) : null}

        {phase === "email" ? (
          <section>
            <p className="eyebrow text-brass">Almost there</p>
            <h1 className="font-display mt-4 text-3xl leading-tight tracking-tight sm:text-4xl">
              Enter your email to see your result
            </h1>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
              We&apos;ll show your readiness category right away. No spam, just
              your result and a path forward if you want one.
            </p>
            <form onSubmit={submitLead} className="mt-10 space-y-5">
              <label className="block">
                <span className="text-sm font-medium text-ink">Email</span>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-md border border-line bg-cream px-3.5 py-3 text-ink outline-none transition-shadow focus:ring-2 focus:ring-copper/30"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-ink">
                  Company name
                </span>
                <input
                  type="text"
                  required
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mt-2 w-full rounded-md border border-line bg-cream px-3.5 py-3 text-ink outline-none transition-shadow focus:ring-2 focus:ring-copper/30"
                />
              </label>
              {error ? (
                <p className="rounded-md border border-copper/30 bg-copper/10 px-4 py-3 text-sm text-copper">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={pending}
                className="inline-flex w-full items-center justify-center rounded-md bg-copper px-6 py-3.5 text-[0.95rem] font-semibold text-cream transition-colors hover:bg-copper-hover disabled:opacity-60 sm:w-auto"
              >
                {pending ? "Saving…" : "Show My Result"}
              </button>
            </form>
          </section>
        ) : null}

        {phase === "result" && result ? (
          <section>
            <p className="eyebrow text-brass">Your result</p>
            <h1 className="font-display mt-4 text-3xl leading-tight tracking-tight sm:text-4xl">
              {resultCopy[result].headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              {resultCopy[result].body}
            </p>
            {resultFlags.length > 0 ? (
              <div className="mt-8">
                <p className="text-[1.05rem] leading-relaxed text-ink">
                  Based on your answers, here&apos;s what stood out:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[1.05rem] leading-relaxed text-ink-soft">
                  {resultFlags.map((flag) => (
                    <li key={flag}>{flag}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {nextSteps.length > 0 ? (
              <div className="mt-12">
                <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                  What a typical next step looks like
                </h2>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
                  Every business is different, but here&apos;s a typical
                  starting point for businesses in this position:
                </p>
                <ol className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
                  {nextSteps.map((step) => (
                    <li key={step.n} className="flex flex-col">
                      <span className="font-display text-sm text-brass">
                        {step.n}
                      </span>
                      <h3 className="font-display mt-3 text-xl tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
                        {step.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}
            <ButtonLink href="/book" className="mt-10">
              Get a full picture with our AI Tools Assessment
            </ButtonLink>
          </section>
        ) : null}
      </div>
    </div>
  );
}

function QuestionScreen({
  eyebrow,
  prompt,
  options,
  onSelect,
}: {
  eyebrow: string;
  prompt: string;
  options: string[];
  onSelect: (option: string) => void;
}) {
  return (
    <section>
      <p className="eyebrow text-brass">{eyebrow}</p>
      <h1 className="font-display mt-4 text-3xl leading-tight tracking-tight sm:text-4xl">
        {prompt}
      </h1>
      <div className="mt-10 flex flex-col gap-3">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className="rounded-md border border-line bg-cream px-5 py-4 text-left text-[1.02rem] leading-snug text-ink transition-colors hover:border-brass/50 hover:bg-paper"
          >
            {option}
          </button>
        ))}
      </div>
    </section>
  );
}
