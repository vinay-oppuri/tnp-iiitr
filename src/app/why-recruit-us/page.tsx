import React from "react";
import { WhyUs } from "@/data/Home";

export default function WhyRecruitUsPage() {
    return (
        <main className="mainBody pt-32 sm:pt-40 pb-20">
            <div className="section-shell relative z-10">
                <h1 className="section-title text-center mb-10 sm:mb-16">
                    Why Recruit Us
                </h1>
                
                <div className="flex flex-col mb-[10vh]">
                    {WhyUs.map((reason: any, id: number) => (
                        <article key={id} className="group relative w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 md:p-10 mb-4">
                            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 transition-all duration-300 group-hover:w-2" />
                            <div className="pl-4">
                                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-800">{reason.heading}</h3>
                                <div className="mt-4 h-1 w-16 rounded bg-slate-200 transition-all duration-300 group-hover:w-24 group-hover:bg-indigo-600" />
                                <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">{reason.content}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
