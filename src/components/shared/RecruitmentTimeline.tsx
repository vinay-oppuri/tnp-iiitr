import React from "react";
import TimelineSteps from "@/data/TimelineSteps";

export default function RecruitmentTimeline() {
    return (
        <div id="recruitmentProcess" className="scroll-mt-32 mt-10 w-full">
            <h2 className="section-sub-title px-2 mb-12 sm:mb-16">Recruitment Process</h2>

            {/* ── MOBILE: single-column with centered dot+line column ── */}
            <div className="sm:hidden">
                {TimelineSteps.map((step: string, id: number) => (
                    <div key={id} className="flex gap-4">
                        {/* Left column: dot + connecting line */}
                        <div className="flex flex-col items-center">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-slate-200 bg-white shadow-soft z-10">
                                <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                            </div>
                            {id < TimelineSteps.length - 1 && (
                                <div className="flex-1 w-px bg-slate-200 my-1" />
                            )}
                        </div>
                        {/* Card */}
                        <div className={`flex-1 pb-4 ${id === TimelineSteps.length - 1 ? "" : ""}`}>
                            <div className="rounded-2xl border border-slate-200/80 bg-white/85 backdrop-blur-sm shadow-soft px-4 py-3">
                                <p className="text-xs leading-relaxed text-slate-600">{step}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── DESKTOP: alternating left / right ── */}
            <div className="hidden sm:block relative mx-auto max-w-4xl">
                {/* Centre line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-slate-200" />

                <div className="space-y-5">
                    {TimelineSteps.map((step: string, id: number) => {
                        const isRight = id % 2 === 0;

                        return (
                            <div key={id} className="relative flex items-center gap-0">
                                {/* Left card */}
                                <div className="flex-1 pr-6 flex justify-end">
                                    {!isRight && (
                                        <div className="w-full rounded-2xl border border-slate-200/80 bg-white/85 backdrop-blur-sm shadow-soft px-5 py-3.5 text-right">
                                            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm md:text-base">{step}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Centre dot */}
                                <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-slate-200 bg-white shadow-soft">
                                    <div className="h-2 w-2 rounded-full bg-slate-400" />
                                </div>

                                {/* Right card */}
                                <div className="flex-1 pl-6 flex justify-start">
                                    {isRight && (
                                        <div className="w-full rounded-2xl border border-slate-200/80 bg-white/85 backdrop-blur-sm shadow-soft px-5 py-3.5">
                                            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm md:text-base">{step}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
