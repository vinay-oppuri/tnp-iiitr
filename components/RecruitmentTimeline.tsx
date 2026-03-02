"use client";

import React from "react";
import TimelineSteps from "../data/TimelineSteps";

export default function RecruitmentTimeline() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-8">
            <div className="relative">
                {/* Center Line */}
                <div className="absolute left-6 top-0 h-full w-px bg-slate-300 md:left-1/2 md:-translate-x-1/2"></div>

                <div className="space-y-8 md:space-y-0">
                    {TimelineSteps.map((step: string, id: number) => {
                        const isLeft = id % 2 !== 0;

                        return (
                            <div
                                key={id}
                                className={`relative flex w-full flex-col md:flex-row items-center md:py-6 ${!isLeft ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="absolute left-6 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-slate-500 bg-white hover:bg-slate-800 md:left-1/2"/>
                                <div
                                    className={`w-full pl-16 md:w-1/2 md:pl-0 ${isLeft ? "md:pr-12" : "md:pl-12"
                                        }`}
                                >
                                    <div
                                        data-aos="fade-up"
                                        className="flex min-h-[90px] w-full flex-col justify-center rounded-2xl bg-white px-8 py-6 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md"
                                    >
                                        <p className="text-center text-sm sm:text-base leading-relaxed text-slate-700">
                                            {step}
                                        </p>
                                    </div>
                                </div>

                                {/* Placeholder for opposite side */}
                                <div className="hidden border-none md:block md:w-1/2"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
